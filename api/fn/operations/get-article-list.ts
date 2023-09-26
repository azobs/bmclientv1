/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArticleDto } from '../../models/article-dto';
import { FilterRequest } from '../../models/filter-request';

export interface GetArticleList$Params {
      body?: FilterRequest
}

export function getArticleList(http: HttpClient, rootUrl: string, params?: GetArticleList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArticleDto>>> {
  const rb = new RequestBuilder(rootUrl, getArticleList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ArticleDto>>;
    })
  );
}

getArticleList.PATH = '/article/bm/v1/list';
