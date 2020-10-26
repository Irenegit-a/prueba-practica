import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiJsonService } from 'src/app/services/api-json.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'; //es para lo de poner tiempos de descanso al buscador y no registre cada tecleo
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  name: String;
  date: Date;
  
  constructor( public json: apiJsonService, private FormBuilder: FormBuilder, private http: HttpClient )
    {
      this.buildForm();
    }
  
  postUser(name, date) {
    
    let url = "http://hello-world.innocv.com/api/user";
    let newUser = new User();

    this.http.post(url, {name, date}).toPromise().then((data:any) => 
      {
        let rta = {error: false, message: "POST. User creado", result: newUser.name, result2: newUser.date};
        console.log(rta, data);
        console.log(JSON.stringify(data.json));
      });
  };

  private buildForm()
  {
    this.registerForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-z A-Z]+$/), Validators.minLength(3), Validators.maxLength(15)]],
      date: ['', Validators.required]
    });
  };

  save(event: Event)
  {
    event.preventDefault();
    if(this.registerForm.valid)
    {
      const value = this.registerForm.value;
      console.log(value);
    }
    else
    {
      this.registerForm.markAllAsTouched();
    }
  };
  
  get nameField(){
    return this.registerForm.get('name');
  };
  
  get dateField(){
    return this.registerForm.get('date');
  };
    

  ngOnInit(): void {
  }

}


// let perro = require('fs');

// let lectura = perro.readFileSync("imperro.json", "utf8")

// let ieme2 : Iemedebe = JSON.parse(lectura)



