import { Injectable } from '@angular/core';

// Http
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

// Constants & environment
import { TIME_OUT, SLASH } from 'src/app/portal/utils/appConstants';
import { environment } from 'src/environments/environment';
import * as ServiceConstants from '../../../portal/utils/serviceConstants';

// Interfaces
import { Client } from '../../models/response/clients/clients';
import { NewClient } from '../../models/request/clients/clientesRequest';

@Injectable({
  providedIn: 'root',
})
export class ClientesApiService {
  // URL & endpoints
  private baseURL = environment.baseUrl;
  private endPoints = environment.endPoint;
  private microServicePath = environment.microServicePath;

  constructor(private http: HttpClient) {}

  public getClientsListApi(
    paramsRequest?: HttpParams
  ): Observable<HttpResponse<Client[]>> {
    return this.http
      .get<Client[]>(this.microServicePath.clients, {
        params: paramsRequest,
        observe: 'response',
      })
      .pipe(timeout(TIME_OUT))
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public postCreateClientApi(body: NewClient) {
    return this.http
      .post(this.microServicePath.clients, body)
      .pipe(timeout(TIME_OUT))
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
