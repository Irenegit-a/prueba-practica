import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class apiJsonService {

  private url= "http://hello-world.innocv.com/api/user"

  constructor( private http: HttpClient) { }

  getJson(){
    return this.http.get(this.url)
  }

  getOneJson(){
    return this.http.get(this.url)
  }

}
