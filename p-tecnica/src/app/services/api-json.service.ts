import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url =  "http://hello-world.innocv.com/api/user";

@Injectable({
  providedIn: 'root'
})

export class apiJsonService {

  private url= "http://hello-world.innocv.com/api/user"

  constructor( private http: HttpClient) { }

  getJson(){
    return this.http.get(this.url)
  };

  getOneJson(id): Observable<any>{
    return this.http.get('${http://hello-world.innocv.com/api/user}/${id}')
  };

  postUser(data): Observable<any>{
    return this.http.post(url, data)
  };

  updateUser(id, data): Observable<any>{
    return this.http.put('${http://hello-world.innocv.com/api/user}/${id}', data)
  };

  deleteUser(id): Observable<any>{
    return this.http.delete('${http://hello-world.innocv.com/api/user}/${id}')
  };

}
