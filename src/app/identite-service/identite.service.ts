import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentiteService {

  public identiteConnected;

  private baseUrl1 = `http://localhost:9091/certification/identities`;
  private baseUrl2 = `http://da058-certification-service.apps.foundry.sii24.pole-emploi.intra/certification/identities`;
  private baseUrl3 = `http://kong-ee-api.swcx0010.sii24.pole-emploi.intra/franck`;
  private loginUrl1 = `https://authentification-candidat-tis.pe-qvr.fr/connexion/oauth2/authorize?client_id=`;

  constructor(private httpClient: HttpClient) {}

  public createIdentite1(identite: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
    };

    const body = JSON.stringify({identite});

    return this.httpClient.post(`${this.baseUrl1}`, body, httpOptions);

  }

  public createIdentite2(identite: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
    };

    const body = JSON.stringify({identite});

    return this.httpClient.post(`${this.baseUrl2}`, body, httpOptions);
  }

  public createIdentite3(identite: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
    };

    const body = JSON.stringify({identite});

    return this.httpClient.post(`${this.baseUrl3}`, body, httpOptions);
  }

  public identiteLogin(id) {
    const loginUrl2 = '&realm=individu&response_type=code&scope=profile&redirect_uri=http://localhost:8080/applitest';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'}),
    };
    return this.httpClient.get(`${this.loginUrl1}` + id + loginUrl2, httpOptions);
  }
}
