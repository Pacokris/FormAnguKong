import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdentiteService {

  public identiteConnected;

  private baseUrl1 = `http://localhost:9091/certification/identities`;
  private baseUrl2 = `http://da058-certification-service.apps.foundry.sii24.pole-emploi.intra/certification/identities`;
  private baseUrl3 = `http://kong-ee-api.swcx0010.sii24.pole-emploi.intra/franck`;
  private loginUrl1 = `https://authentification-candidat-tis.pe-qvr.fr/connexion/oauth2/authorize?client_id=`;

  constructor(private httpClient: HttpClient) { }

  public createIdentite1(identite: any): Observable<any> {

    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json;charset=UTF-8'
    // });
    // let options = {
    //   headers: headers
    // }

    // const body = JSON.stringify({ identite: identite });

    // this.httpClient.post(`${this.baseUrl1}`, body, options)
    //   .subscribe(data => {
    //     console.log(data);
    //   });

    // return this.httpClient.get(`${this.baseUrl1}`, {
    //   headers: new HttpHeaders({
    //     'Authorization': '{data}',
    //     'Content-Type': 'application/json',
    //   }), responseType: 'blob'
    // })

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    const body = JSON.stringify({ identite });
    return this.httpClient.post(`${this.baseUrl1}`, body, httpOptions);
  }

  public createIdentite2(identite: any): Observable<any> {

    const body = JSON.stringify({ identite: identite });

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }

    this.httpClient.post(`${this.baseUrl2}`, body, options)
      .subscribe(data => {
        console.log(data);
      });

    return this.httpClient.get(`${this.baseUrl2}`, {
      headers: new HttpHeaders({
        'Authorization': '{data}',
        'Content-Type': 'application/json',
      }), responseType: 'blob'
    }).pipe(
      tap(
        // Log the result or error
        data => console.log('You received data'),
        error => console.log(error)
      )
    );

    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    // };
    // const body = JSON.stringify({ identite });
    // return this.httpClient.post(`${this.baseUrl2}`, body, httpOptions);
  }

  public createIdentite3(identite: any): Observable<any> {

    const body = JSON.stringify({ identite: identite });

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 66288c28-875a-4bc2-8ddc-ecf0c9f02d27'
    });
    let options = {
      headers: headers
    }

    this.httpClient.post(`${this.baseUrl3}`, body, options)
      .subscribe(data => {
        console.log(data);
      });

    return this.httpClient.get(`${this.baseUrl3}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 66288c28-875a-4bc2-8ddc-ecf0c9f02d27'
      }), responseType: 'blob'
    }).pipe(
      tap(
        // Log the result or error
        data => console.log('You received data'),
        error => console.log(error)
      )
    );

    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    // };
    // const body = JSON.stringify({ identite });
    // return this.httpClient.post(`${this.baseUrl3}`, body, httpOptions);
  }

  public identiteLogin(id) {
    const loginUrl2 = '&realm=individu&response_type=code&scope=profile&redirect_uri=http://localhost:8080/applitest';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),
    };
    return this.httpClient.get(`${this.loginUrl1}` + id + loginUrl2, httpOptions);
  }
}

