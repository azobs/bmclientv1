/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoadingdetailsDto } from '../../models/loadingdetails-dto';

export interface SaveLoadingdetails$Params {
      body?: LoadingdetailsDto
}

export function saveLoadingdetails(http: HttpClient, rootUrl: string, params?: SaveLoadingdetails$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingdetailsDto>> {
  const rb = new RequestBuilder(rootUrl, saveLoadingdetails.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<LoadingdetailsDto>;
    })
  );
}

saveLoadingdetails.PATH = '/loading/bm/v1/details/create';
