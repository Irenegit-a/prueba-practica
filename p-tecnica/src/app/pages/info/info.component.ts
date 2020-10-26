import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { apiJsonService } from 'src/app/services/api-json.service';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {

public users: User;

private url = "http://hello-world.innocv.com/api/user"
  constructor( public api: apiJsonService, private http:HttpClient ) { }

  allUsers(){
    this.api.getJson().subscribe((data:User) => {
      this.users = data;
      console.log(data)
    });
  }

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
