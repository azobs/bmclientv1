/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofCategoryDto } from '../../models/pageof-category-dto';

export interface GetCategoryPage$Params {
      body?: FilterRequest
}

export function getCategoryPage(http: HttpClient, rootUrl: string, params?: GetCategoryPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofCategoryDto>> {
  const rb = new RequestBuilder(rootUrl, getCategoryPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofCategoryDto>;
    })
  );
}

getCategoryPage.PATH = '/category/bm/v1/page';
