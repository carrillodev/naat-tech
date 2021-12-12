import { Injectable } from '@angular/core';

// Importaciones de http
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

// Importaciones de modelos
import {
  NotificationToSendModel,
  NotificationSentModel,
} from '../../models/response/notifications/notificationsResponse';

// Importación de constantes, utilidades
import { environment } from 'src/environments/environment';
import { TIME_OUT } from 'src/app/portal/utils/appConstants';

// Importacion de rxjs
import { Observable } from 'rxjs';
import { timeout, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NotificationsApiService {
  private msPath = environment.microServicePath.notification;
  private endPoints = environment.endPoint;

  constructor(private http: HttpClient) {}

  /**
   * Método que realiza la petición http al servicio para la obtención del listado de notificaciones por enviar
   * @param paramsRequest (HttpParams) parámetros solicitados por el servicio [page, size]
   * @returns (NotificationToSendModel[]) listado de notificaciones por enviar
   */
  public getNotificationsToSendApi(
    paramsRequest: HttpParams
  ): Observable<HttpResponse<NotificationToSendModel[]>> {
    return this.http
      .get<NotificationToSendModel[]>(
        this.msPath + this.endPoints.notificationToSend,
        {
          params: paramsRequest,
          observe: 'response',
        }
      )
      .pipe(timeout(TIME_OUT))
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  /**
   * Método que realiza la petición http al servicio para la obtención del listado de notificaciones enviadas
   * @param paramsRequest (HttpParams) parámetros solicitados por el servicio [page, size]
   * @returns (NotificationSentModel[]) listado de notificaciones enviadas
   */
  public getNotificationsSentApi(
    paramsRequest: HttpParams
  ): Observable<HttpResponse<NotificationSentModel[]>> {
    return this.http
      .get<NotificationSentModel[]>(
        this.msPath + this.endPoints.notificationSent,
        {
          params: paramsRequest,
          observe: 'response',
        }
      )
      .pipe(timeout(TIME_OUT))
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
