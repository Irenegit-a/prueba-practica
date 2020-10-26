import { Component, OnInit } from '@angular/core';
import { apiJsonService } from 'src/app/services/api-json.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'; //es para lo de poner tiempos de descanso al buscador y no registre cada tecleo


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  styles: ['input.ng-valid{border:2px solid white;}']
})
export class LoginComponent implements OnInit {

  // public user: any;
  
  // registerForm: FormGroup;

  constructor( public json: apiJsonService, private FormBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

}



// private fb: FormBuilder, private router: Router
