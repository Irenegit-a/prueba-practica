import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiJsonService } from 'src/app/services/api-json.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})

export class ProfileComponent implements OnInit {

  editForm: FormGroup;
  deleteForm: FormGroup;
  
  constructor( public json: apiJsonService, private FormBuilder: FormBuilder, private http: HttpClient )
    {
      this.buildForm();
    }

  private buildForm()
  {
    this.editForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.minLength(3), Validators.maxLength(11)]],
      date: ['', Validators.required]
    });

    this.deleteForm = this.FormBuilder.group({
      id: ['', [Validators.required, Validators.pattern(/^[1-9]+$/)]]
    });
  }

  save(event: Event)
  {
    event.preventDefault();
    if(this.editForm.valid)
    {
      const value = this.editForm.value;
      console.log(value);
    }
    else
    {
      this.editForm.markAllAsTouched();
    }
  }

  get nameField(){
    return this.editForm.get('name');
  };

  get idField(){
    return  this.editForm.get('id');
  };
  

  ngOnInit(): void {
  }

}
