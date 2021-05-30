import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes() {
    //return this.http.get('/server/api/v1/bikes'); //connect to SpringBoot API via Proxy

    //if needed for lots of API calls, put the header info into a set of code is more clear
    let token = localStorage.getItem('access_token'); //get token and pass to SpringBoot API???
    return this.http.get('/server/api/v1/bikes',
      {headers: new HttpHeaders().set('Authorization', 'Bearer' + token)} //this is a common http header authorization schema
    );
  }

  getBike(id: number) {
    let token = localStorage.getItem('access_token'); //get token and pass to SpringBoot API???
    return this.http.get('/server/api/v1/bikes' + id,
      {headers: new HttpHeaders().set('Authorization', 'Bearer' + token)} //this is a common http header authorization schema
    );
  }

  createBikeRegistration(bike) {
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }
}
