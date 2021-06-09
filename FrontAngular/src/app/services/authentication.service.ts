import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rutaAPI } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string;

  constructor(private http: HttpClient) {

    this.url = `${rutaAPI}/authentication`;

  }

  create({ email, password }:any): Promise<any> {

    const bodyRequest = { strategy: 'local', email, password };   

    return this.http.post<any>(this.url, bodyRequest).toPromise();

  }
}
