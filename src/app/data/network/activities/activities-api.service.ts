import { Injectable } from '@angular/core';

// Internet
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { timeout, map } from 'rxjs/operators';

// Constants & environment
import { TIME_OUT, SLASH } from 'src/app/portal/utils/appConstants';
import { environment } from 'src/environments/environment';

// Importación de modelos
import { ActivityListModel } from '../../models/response/activities/activityResponse';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesApiService {
  private microServicePath = environment.microServicePath;

  constructor(private http: HttpClient) { }

  public getActivitiesListService(paramsRequest: HttpParams): Observable<HttpResponse<ActivityListModel[]>> {
    return this.http.get<ActivityListModel[]>(this.microServicePath.activities, {
      params: paramsRequest,
      observe: 'response'
    })
    .pipe(timeout(TIME_OUT))
    .pipe(map(response => {
      return response;
    }));
  }
}
