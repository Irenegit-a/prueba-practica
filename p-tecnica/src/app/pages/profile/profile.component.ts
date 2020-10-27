import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiJsonService } from 'src/app/services/api-json.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})

export class ProfileComponent implements OnInit {

  user = 
  {
    name: '',
    date: '',
    id: ''
  };

  users: User[];

  currentUser = null;
  message = "";

  editForm: FormGroup;
  deleteForm: FormGroup;
  
  constructor( private api: apiJsonService, private FormBuilder: FormBuilder, private router: Router )
    {
      this.buildForm();
    }
    

  updateById(): void {
    this.api.updateUser(this.currentUser.id, this.currentUser)
    .subscribe(
      response => {
        console.log(response);
        this.message = "PUT. User actualizado"
      }
    );
  };


  deleteById(id): void {
    this.api.deleteUser(this.user.id)
    .subscribe(
      response => {
        console.log(response);
        console.log("Eliminado")
        this.router.navigate(['/profile']);
      },
      error => {
        console.log(error);
      }
    );
  };


  private buildForm()
  {
    this.editForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.minLength(3), Validators.maxLength(15)]],
      date: ['', Validators.required]
    });

    this.deleteForm = this.FormBuilder.group({
      id: ['', [Validators.required, Validators.pattern(/^[1-9]+$/)]]
    });
  };


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
  };


  get nameField(){
    return this.editForm.get('name');
  };
  

  ngOnInit(): void {
  };

}
