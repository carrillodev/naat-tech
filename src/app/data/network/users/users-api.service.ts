import { Injectable } from '@angular/core';

// Importaciones de http
import { HttpClient, HttpParams } from '@angular/common/http';

// Importaciones de modelos
import { UserListResponse } from '../../models/response/users/usersResponse';

// Importaciones de rxjs
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

// Constantes
import { environment } from 'src/environments/environment';
import { TIME_OUT } from 'src/app/portal/utils/appConstants';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private msPath = environment.microServicePath.users;

  constructor(private http: HttpClient) {}

  public getUserListApi(
    paramsRequest: HttpParams
  ): Observable<UserListResponse[]> {
    return this.http
      .get<UserListResponse[]>(this.msPath, {
        params: paramsRequest,
      })
      .pipe(timeout(TIME_OUT))
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
