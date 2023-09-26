/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { ProductDto } from '../../models/product-dto';

export interface GetProductList$Params {
      body?: FilterRequest
}

export function getProductList(http: HttpClient, rootUrl: string, params?: GetProductList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductDto>>> {
  const rb = new RequestBuilder(rootUrl, getProductList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ProductDto>>;
    })
  );
}

getProductList.PATH = '/product/bm/v1/list';
