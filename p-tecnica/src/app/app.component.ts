import { Component } from '@angular/core';
import { from } from 'rxjs';
import { apiJsonService } from './services/api-json.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { newArray } from '@angular/compiler/src/util';
// import { ValidacionesPropias } from './validaciones-propias';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'p-tecnica';
  result: string;

  constructor(public json: apiJsonService){

    // this.json.getJson('http://hello-world.innocv.com/api/user').subscribe((res:any) => {
    //   console.log(res);
    // });

  //   this.json.getOneJson('http://hello-world.innocv.com/api/user/:id').subscribe((res:any) => {
  //     console.log(res);
  //   });
  }

  // submit(){
  //   if (this.registerForm.valid)
  //     {
  //       this.result = "Todos los datos son válidos";
  //     }
  //   else
  //     {
  //       this.result = "Hay datos inválidos, revisa el formulario";
  //     }
  //   }
  }
