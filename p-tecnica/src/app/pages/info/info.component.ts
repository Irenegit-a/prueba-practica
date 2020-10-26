import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { apiJsonService } from 'src/app/services/api-json.service';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { error } from 'console';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {

// public users: User;

users: any;
currentUser: null;
currentIndex = -1;
id = '';

// private url = "http://hello-world.innocv.com/api/user"

  constructor( private api: apiJsonService, private http:HttpClient ) { }

  // allUsers(){
  //   this.api.getJson().subscribe((data:User) => {
  //     this.users = data;
  //     console.log(data)
  //   });
  // }

  allUsers(): void{
    this.api.getJson()
    .subscribe(
      users => {
        this.users = users;
        console.log(users);
      },
      error => {
        console.log(error);
      }
    );
  }

  refresh(): void {
    this.allUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  searchById(): void {
    this.api.searchById(this.id)
    .subscribe(
      users => {
        this.users = users;
        console.log(users);
      },
      error => {
        console.log(error)
      }
    );
  }
  
  // oneUser(id): Observable<any>{
  //   return this.http.get('${http://hello-world.innocv.com/api/user}/${id}')
  // };

  // oneUser(id: number){
  //   console.log(id);
  //   this.api.getOneJson().subscribe((data:User) => {
  //     this.users[id] = data;
  //     console.log(data)
  //   });
  // }


  ngOnInit(): void{
      this.allUsers();
  }

}
