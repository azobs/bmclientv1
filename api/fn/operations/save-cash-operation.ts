/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CashOperationDto } from '../../models/cash-operation-dto';

export interface SaveCashOperation$Params {
      body?: CashOperationDto
}

export function saveCashOperation(http: HttpClient, rootUrl: string, params?: SaveCashOperation$Params, context?: HttpContext): Observable<StrictHttpResponse<CashOperationDto>> {
  const rb = new RequestBuilder(rootUrl, saveCashOperation.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CashOperationDto>;
    })
  );
}

saveCashOperation.PATH = '/account/bm/v1/cashoperation/create';
