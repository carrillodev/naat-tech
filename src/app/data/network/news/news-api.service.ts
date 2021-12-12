import { Injectable } from '@angular/core';

// Internet
import { HttpClient, HttpParams } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { timeout, map } from 'rxjs/operators';

// Constants & environment
import { TIME_OUT, SLASH } from 'src/app/portal/utils/appConstants';
import { environment } from 'src/environments/environment';

// Importación de constantes
import * as ServiceConstants from '../../../portal/utils/serviceConstants';

// Responses
import { NewsListResponse, NewsDetailResponse } from '../../models/response/login/newsResponse';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  private microServicePath = environment.microServicePath;

  constructor(private http: HttpClient) {}

  /**
   * Método para obtener el listado de noticias
   * @param params (HttpParams) Página y tamaño de la lista
   * @returns (ListNewsResponse[]) Lista con las noticias
   */
  public getNewsList(params: HttpParams): Observable<NewsListResponse[]> {
    return this.http.get<NewsListResponse[]>(this.microServicePath.news, {params})
    .pipe(timeout(TIME_OUT))
    .pipe(map(response => {
      return response;
    }));
  }

  /**
   * Método que obtiene los detalles de la noticia.
   * @param idNews (string) ID de la noticia de la que se desea obtener los detalles
   * @returns (NewsDetailResponse) Objeto con los detalles de la noticia
   */
  public getNewsDetailService(idNews: string): Observable<NewsDetailResponse> {
    return this.http.get<NewsDetailResponse>(this.microServicePath.news + idNews)
    .pipe(timeout(TIME_OUT));
  }

  public postCreateNews(news): Observable<NewsDetailResponse> {
    return this.http.post<NewsDetailResponse>(this.microServicePath.news, news)
    .pipe(timeout(TIME_OUT))
    .pipe(map(response => {
      return response;
    }));
  }
}
