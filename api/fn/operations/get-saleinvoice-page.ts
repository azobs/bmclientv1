/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofSaleinvoiceDto } from '../../models/pageof-saleinvoice-dto';

export interface GetSaleinvoicePage$Params {
      body?: FilterRequest
}

export function getSaleinvoicePage(http: HttpClient, rootUrl: string, params?: GetSaleinvoicePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofSaleinvoiceDto>> {
  const rb = new RequestBuilder(rootUrl, getSaleinvoicePage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofSaleinvoiceDto>;
    })
  );
}

getSaleinvoicePage.PATH = '/saleinvoice/bm/v1/page';
