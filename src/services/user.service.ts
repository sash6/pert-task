import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl='http://localhost:3000/'
  headers = new HttpHeaders().append('Accept', 'application/json')
                             .append('Content-Type', 'application/json')
                             .append('Access-Control-Allow-Credentials', 'true');
  constructor(private httpClient: HttpClient,) { }

  formSubmit(form) {   
    return this.httpClient.post(
      this.baseUrl + "api/user/save/form",
      form,
      {        
        headers: this.headers,
      }
    );
  }
}
