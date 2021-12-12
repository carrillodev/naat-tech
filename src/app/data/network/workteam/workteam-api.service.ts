import { Injectable } from '@angular/core';

// Importaciones de http
import { HttpClient } from '@angular/common/http';

// Importaciones de los modelos
import { WorkTeamListResponse } from '../../models/response/workTeam/workTeamResponse';

// Rxjs
import { Observable } from 'rxjs';
import { timeout, map } from 'rxjs/operators';

// Importaciones de constantes, entornos y utilidades
import { environment } from 'src/environments/environment';
import { TIME_OUT } from 'src/app/portal/utils/appConstants';

@Injectable({
  providedIn: 'root',
})
export class WorkteamApiService {
  private msPath = environment.microServicePath;

  constructor(private http: HttpClient) {}

  public getWorkTeamListApi(): Observable<WorkTeamListResponse[]> {
    return this.http
      .get<WorkTeamListResponse[]>(this.msPath.workTeam)
      .pipe(timeout(TIME_OUT))
      .pipe(map(response => {
        return response;
      }));
  }
}
