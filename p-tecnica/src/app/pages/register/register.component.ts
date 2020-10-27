import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiJsonService } from 'src/app/services/api-json.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {

  user =
  {
    name: '',
    date: '',
    available: false
  };
  submitted = false;
  
  registerForm: FormGroup;
  
  constructor( private router: Router, private api: apiJsonService, private FormBuilder: FormBuilder, private http: HttpClient )
    {
      this.buildForm();
    }


  postUser(): void
  {
    const data = {
      name: this.user.name,
      date: this.user.date
    };

    this.api.postUser(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  };


  newUser(): void {
    this.submitted = false;
    this.user = {
      name: '',
      date: '',
      available: false
    };
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


  navigateToInfo()
  {
    this.router.navigate(["/info"]);
  };
    

  ngOnInit(): void {
  };

}


