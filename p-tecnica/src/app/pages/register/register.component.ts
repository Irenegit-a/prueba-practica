import { Component, OnInit } from '@angular/core';
import { apiJsonService } from 'src/app/services/api-json.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'; //es para lo de poner tiempos de descanso al buscador y no registre cada tecleo


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  // styles: ['input.ng-valid{border:2px solid white;}']
})
export class RegisterComponent implements OnInit {

  // result: string; 

  // nameControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(11)]);

  registerForm: FormGroup;

  constructor( public json: apiJsonService, private FormBuilder: FormBuilder )
    {
        this.json.getJson('http://hello-world.innocv.com/api/user').subscribe((res:any) => {
        console.log(res);
        });

        this.json.getOneJson('http://hello-world.innocv.com/api/user').subscribe((res:any) => {
        console.log(res);
        });
        
        this.buildForm();
    }

  // getName(event: Event)
  //   {
  //     event.preventDefault();
  //     console.log(this.nameControl.value);
  //   }
  


    private buildForm()
    {
      this.registerForm = this.FormBuilder.group({
        name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.minLength(3), Validators.maxLength(11)]],
        confName: ['', Validators.required],
        date: ['', Validators.required]
      });


      // this.form.valueChanges
      //   .pipe(debounceTime(500))
      //   .subscribe( value => {console.log(value)}
      // );

    }


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
      }
    
    get nameField()
      {
        return this.registerForm.get('name');
      }
    
    get confField()
      {
        return this.registerForm.get('confName');
      }
    
    get dateField()
      {
        return this.registerForm.get('date');
      }

    // get nameFieldValid()
    //   {
    //     return this.nameField.touched && this.nameField.valid;
    //   }

    // get nameFieldInvalid()
    //   {
    //     return this.nameField.touched && this.nameField.invalid;
    //   }

  ngOnInit(): void {
  }

}


// let perro = require('fs');

// let lectura = perro.readFileSync("imperro.json", "utf8")

// let ieme2 : Iemedebe = JSON.parse(lectura)



