import { Injectable } from '@angular/core';

// Http
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

// Constants & environment
import { TIME_OUT, SLASH } from 'src/app/portal/utils/appConstants';
import { environment } from 'src/environments/environment';

// Interfaces
import { ProjectDetail, ProjectsList } from '../models/response/projects/projects';
import { NewProject, UpdateProjectDetail } from '../models/request/projects/projectsRequest';

// Importación de constantes
import * as ServiceConstants from '../../portal/utils/serviceConstants';

@Injectable({
  providedIn: 'root'
})
export class ProjectListServiceService {
  // URL & endpoints
  private baseURL = environment.baseUrl;
  private endPoints = environment.endPoint;
  private microServicePath = environment.microServicePath;

  constructor( private http: HttpClient ) { }


  /**
   * Método para el consumo del servicio del listado de proyectos
   * @param clientId (string)
   * @returns (Projects List) interfaz con la estructura de la respuesta del servicio
   */
  public getProjectsList(clientId: string, paramsRequest: any) {
    return this.http.get(this.microServicePath.clients + clientId + this.endPoints.projects, {
      headers: ServiceConstants.PRINCIPAL_HEADER,
      params: paramsRequest,
      observe: 'response'
    }).pipe(
      timeout(TIME_OUT)
    );
  }

  public getProjectDetail(clientId: string, id: string): Observable<ProjectDetail> {
    return this.http.get<ProjectDetail>(this.microServicePath.clients + clientId + this.endPoints.projects + SLASH + id, {
      headers: ServiceConstants.PRINCIPAL_HEADER
    }).pipe(
      timeout(TIME_OUT)
    );
  }

  public putProjectDetail(clientId: string, id: string, body: UpdateProjectDetail): Observable<ProjectDetail> {
    return this.http.put<ProjectDetail>(this.microServicePath.clients + clientId + this.endPoints.projects + SLASH + id, body)
    .pipe(
      timeout(TIME_OUT)
    );
  }

  public postCreateProject(clientId: string, body: NewProject): Observable<ProjectDetail> {
    return this.http.post<ProjectDetail>(this.microServicePath.clients + clientId + this.endPoints.projects, body)
    .pipe(
      timeout(TIME_OUT)
    );
  }
}
