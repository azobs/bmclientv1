/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArticleDto } from '../../models/article-dto';

export interface GetArticleById$Params {

/**
 * The id that represent the Article found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getArticleById(http: HttpClient, rootUrl: string, params: GetArticleById$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
  const rb = new RequestBuilder(rootUrl, getArticleById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ArticleDto>;
    })
  );
}

getArticleById.PATH = '/article/bm/v1/getby/{id}';
