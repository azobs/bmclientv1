/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UnitconversionDto } from '../../models/unitconversion-dto';

export interface GetUnitconversionById$Params {

/**
 * The id that represent the Unitconversion found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getUnitconversionById(http: HttpClient, rootUrl: string, params: GetUnitconversionById$Params, context?: HttpContext): Observable<StrictHttpResponse<UnitconversionDto>> {
  const rb = new RequestBuilder(rootUrl, getUnitconversionById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UnitconversionDto>;
    })
  );
}

getUnitconversionById.PATH = '/unit/bm/v1/conversion/getby/{id}';
