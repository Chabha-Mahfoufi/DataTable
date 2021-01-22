import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../helpers/user.service';
import { City } from '../helpers/user.service';
import { User } from '../helpers/user.service';
import { Router } from '@angular/router'
import { MustMatch } from '../helpers/must-match.validator';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  allCities: City [];
  user = new User();
  users : User[];
  id : number;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
     this.user = this.userService.getUserByUserId(this.userService.idModification);
     this.allCities= this.userService.getCities();
    }

  ngOnInit() {


    if (this.userService.idModification == 0){
      this.registerForm = this.formBuilder.group({
        idUser: [{value: '', disabled: true}, Validators.required],
        firstName: ['Mahfoufi', Validators.required],
        lastName: ['Chabha', Validators.required],
        city: [ , Validators.required],
        email: ['chabha.mahf@gmalil.com', [Validators.required, Validators.email]],
        password: ['0000', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['0000', Validators.required],
        acceptTerms: [true, Validators.requiredTrue],
      }, {
        validator: MustMatch('password', 'confirmPassword')
      });

    } else {
      this.registerForm = this.formBuilder.group({
        idUser: [{value: this.user.idUser, disabled: true}, Validators.required],
        firstName: [this.user.firstName, Validators.required],
        lastName: [this.user.firstName, Validators.required],
        city: [ this.user.city, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]],
        password: [this.user.password, [Validators.required, Validators.minLength(4)]],
        confirmPassword: [this.user.password, Validators.required],
        acceptTerms: [true, Validators.requiredTrue],
      }, {
        validator: MustMatch('password', 'confirmPassword')
      });
    }
  }

  get feild(){
    return this.registerForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log('Form Value : ' + JSON.stringify(this.registerForm.value, null, 1));

    let newUser = new User();
    newUser.firstName = this.registerForm.value.firstName;
    newUser.lastName = this.registerForm.value.lastName;
    newUser.city = this.registerForm.value.city;
    newUser.email = this.registerForm.value.email;
    newUser.password = this.registerForm.value.password;
    this.users = this.userService.createUser(newUser);
    this.onReset();
    this.router.navigate(['home']);
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }

  saveModificationUser(){
    // let dataRows = this.userService.users.;
    console.log('user modifications : ',this.user.firstName);
    for (let i=0; i<this.userService.users.length; i++ ){
      if(this.userService.idModification == this.userService.users[i].idUser){
        this.userService.users[i].firstName = this.registerForm.value.firstName;
        this.userService.users[i].lastName = this.registerForm.value.lastName;
        this.userService.users[i].city = this.registerForm.value.city;
        this.userService.users[i].email = this.registerForm.value.email;
        this.userService.users[i].password = this.registerForm.value.password;
      }
      // console.log('user modifications : ',this.userModification.firstName);
      this.router.navigate(['home']);
    }
  }

  setSelectedCity(c1: City , c2: City ):boolean{
    return c1.cityName === c2.cityName;
  }

}
