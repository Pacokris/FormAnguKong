import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Identite } from '../identite-model/identite';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentiteService {

  public identiteConnected;

  private baseUrl = `http://localhost:8090/certification/identities`;
  private baseUrl2 = `http://da058-certification-service.apps.foundry.sii24.pole-emploi.intra/certification/identities`;
  private baseUrl3 = `http://kong-ee-api.swcx0010.sii24.pole-emploi.intra/requeteCertification`;

  constructor(private httpClient: HttpClient) { }

  public createIdentite(identite: Object): Observable<Object> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };

    let body = identite;
    console.log(body);


    return this.httpClient.post(`${this.baseUrl}`, `${body}`, httpOptions)
  }
}