/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductDto } from '../../models/product-dto';

export interface UpdateProduct$Params {
      body?: ProductDto
}

export function updateProduct(http: HttpClient, rootUrl: string, params?: UpdateProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductDto>> {
  const rb = new RequestBuilder(rootUrl, updateProduct.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductDto>;
    })
  );
}

updateProduct.PATH = '/product/bm/v1/update';
