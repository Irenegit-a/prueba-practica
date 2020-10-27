import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiJsonService } from 'src/app/services/api-json.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})

export class InfoComponent implements OnInit {

users: any;
currentUser = null;
message = "";

  constructor( private api: apiJsonService, private http:HttpClient, private route: ActivatedRoute, private router: Router )
  { }


  searchById(id): void {
    this.api.getOneJson(id)
    .subscribe(
      user => {
        this.currentUser = user;
        console.log(user);
      },
      error => {
        console.log(error);
      }
    );
  };


  setStatus(status): void {
    const data = {
      name: this.currentUser.name,
      date: this.currentUser.date,
      id: this.currentUser.id,

      available: status
    };


    this.api.updateUser(this.currentUser.id, data)
    .subscribe(
      response => {
        this.currentUser.available = status;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  };
  

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
  };


  ngOnInit(): void{
      this.allUsers();
  };

}
