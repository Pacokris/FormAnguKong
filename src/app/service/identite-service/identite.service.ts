import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    const data = JSON.stringify({ identite });
    return this.httpClient.post(`${this.baseUrl1}`, data, httpOptions);
  }

  public createIdentite2(identite: any): Observable<any> {

    const data = JSON.stringify({ identite: identite });

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }

    this.httpClient.post(`${this.baseUrl2}`, data, options)
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
    // const data = JSON.stringify({ identite });
    // return this.httpClient.post(`${this.baseUrl2}`, data, httpOptions);
  }

  public createIdentite3(identite: any): Observable <any> {

    // const data = JSON.stringify({ identite: identite });

    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InpoQm9mYlp3K2prWlpqWHMyOGZHZnp4WmdNOD0ifQ.eyJ0b2tlbk5hbWUiOiJpZF90b2tlbiIsImF6cCI6ImFnZW50X2tvbmdfb2lkYyIsInN1YiI6ImNkYjk4NGE3LTIzODktNGRiMC05NTMwLTFhMzQxNDU0ZTczNCIsImF0X2hhc2giOiI4SlJESWtrX2s2VHdmS21QZnU4ZERnIiwiaXNzIjoiaHR0cHM6Ly9zbzAxNy1wb2FtLWxzcnNiazEtMS5zaWkyNC5wb2xlLWVtcGxvaS5pbnRyYToyMDM2Mi9jb25uZXhpb24vb2F1dGgyL2luZGl2aWR1Iiwib3JnLmZvcmdlcm9jay5vcGVuaWRjb25uZWN0Lm9wcyI6IjYzYWNlODcyLTc4ZWItNGE1Yy04OWFiLWNiNjVkMmU4ODhmMiIsImlhdCI6MTU2MTQ2MTI0OCwiYXV0aF90aW1lIjoxNTYxNDYxMjQ3LCJleHAiOjE1NjE0NjQ4NDgsInRva2VuVHlwZSI6IkpXVFRva2VuIiwidXBkYXRlZF9hdCI6IjAiLCJhdWRpdFRyYWNraW5nSWQiOiJkOTVlNWE0YS1iZjExLTQyMzctOTUwNS05NzljMWQwOTNjYTMtNzYxODIiLCJyZWFsbSI6Ii9pbmRpdmlkdSIsImF1ZCI6ImFnZW50X2tvbmdfb2lkYyIsImNfaGFzaCI6InM2UUo5MUVOdnozWVJuRHZQQkRFekEifQ.oYlldK78sJeV5ZzBBCUwX4ZEVBMvvMbzN1NBZWtv9jtdqAePxaOSoNAf7-uhGnPsdmZ2jqyGjaWrReA6W7lUjM10QSxz0VLtDF2JMRM2ErhHPhjTLACXI8_Vb-aB1cs932PJUcs3bZ8RBAHMVBE-6r3jEaFflzAK4cfRDVZQaj_BOiIujWOeaQjKqmszq-dRXqify_R5RbAHfhzGNnxzrSSVnElVwsCAfNiV49C_R6kjR2JZCppGKHRjxzXXdPtX7hjsIq5nVTdofK4ytz6Lqjx6INH_fljTGHYHNzh9O4YAq6_xV_e6olT4UusZ7g1Lc0aGZ05Y_uu1pbBl3yUztw'
    // });
    // let options = {
    //   headers: headers
    // }

    // this.httpClient.post(`${this.baseUrl3}`, data, options)
    //   .subscribe(
    //     (res) => {
    //       console.log(res)
    //     },
    //     (err: HttpErrorResponse) => {
    //       console.log(err.error);
    //       console.log(err.name);
    //       console.log(err.message);
    //       console.log(err.status);
    //     }
    //   );


    // return this.httpClient.get(`${this.baseUrl3}`, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }), responseType: 'json'
    // }).pipe(
    //   tap(
    //     // Log the result or error
    //     data => console.log('You received data'),
    //     error => console.log(error)
    //   )
    // );

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InpoQm9mYlp3K2prWlpqWHMyOGZHZnp4WmdNOD0ifQ.eyJ0b2tlbk5hbWUiOiJpZF90b2tlbiIsImF6cCI6ImFnZW50X2tvbmdfb2lkYyIsInN1YiI6ImNkYjk4NGE3LTIzODktNGRiMC05NTMwLTFhMzQxNDU0ZTczNCIsImF0X2hhc2giOiIzR1pZemFXTEdEVzZ1V0dtS0ljeE13IiwiaXNzIjoiaHR0cHM6Ly9zbzAxNy1wb2FtLWxzcnNiazEtMS5zaWkyNC5wb2xlLWVtcGxvaS5pbnRyYToyMDM2Mi9jb25uZXhpb24vb2F1dGgyL2luZGl2aWR1Iiwib3JnLmZvcmdlcm9jay5vcGVuaWRjb25uZWN0Lm9wcyI6IjY1NWJjYTE4LWI1ZDAtNDdjYS04YTZhLTdhYTMyNWY4YzM2YSIsImlhdCI6MTU2MTQ1MjkxOCwiYXV0aF90aW1lIjoxNTYxNDUyOTE4LCJleHAiOjE1NjE0NTY1MTgsInRva2VuVHlwZSI6IkpXVFRva2VuIiwidXBkYXRlZF9hdCI6IjAiLCJhdWRpdFRyYWNraW5nSWQiOiJkOTVlNWE0YS1iZjExLTQyMzctOTUwNS05NzljMWQwOTNjYTMtNjY0MjQiLCJyZWFsbSI6Ii9pbmRpdmlkdSIsImF1ZCI6ImFnZW50X2tvbmdfb2lkYyIsImNfaGFzaCI6IjlWSjdqSHQyV184bnVKVEJ4VFJkMXcifQ.BautlnvTc7cHOZIGvrNRbs6-SfsxgwMGhxm5RR3i0LeTG122apNJ1TCkobwrF-8F3RU8SHq99rw2CYPuc8_fX_8V_yNvByrGIcheYy7XGSj8d2M8PRdFzFqRmixsyKfCMTcBigaWzcwrN8mJS3GRNmqJX5DTOfSCbChpfo1_9RfVP83Kcpi1z31kgWs1A3cAdZjTbvXyDtJvS1aQGcITGBr9ULuX0qHkKJW_S10KcGXoU6ZFY-veH_J4lcEv9Mkh0q3swwmcxuEydpl_B7Cu_d1r5gM1T_m943hOEcbX6EYrf8Ud01J7pXTjLBVFslbJ5UKRb-kMwaOJ7qXS-4vgDw'
      })
    };
    const data = JSON.stringify({ identite });

    this.httpClient.post(`${this.baseUrl3}`, data, httpOptions).subscribe(
      (res) => {
        console.log(res)
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );

    return this.httpClient.get(`${this.baseUrl3}`)
  }

  public identiteLogin(id) {
    const loginUrl2 = '&realm=individu&response_type=code&scope=profile&redirect_uri=http://localhost:8080/applitest';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),
    };
    return this.httpClient.get(`${this.loginUrl1}` + id + loginUrl2, httpOptions);
  }
}

