/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SaleinvoiceDto } from '../../models/saleinvoice-dto';

export interface GetSaleinvoiceById$Params {

/**
 * The id that represent the Saleinvoice found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getSaleinvoiceById(http: HttpClient, rootUrl: string, params: GetSaleinvoiceById$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleinvoiceDto>> {
  const rb = new RequestBuilder(rootUrl, getSaleinvoiceById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SaleinvoiceDto>;
    })
  );
}

getSaleinvoiceById.PATH = '/saleinvoice/bm/v1/getby/{id}';
