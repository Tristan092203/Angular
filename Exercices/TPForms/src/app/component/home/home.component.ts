import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, CheckboxRequiredValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/users';
import { HeaderService } from 'src/app/service/headerservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myTab : any[] = [];
  myGroup!: FormGroup;
  user!: Users;
  titre:string = "Home";
  mylocalStorage = localStorage;
  constructor(private fb : FormBuilder, private headerService : HeaderService, public route : Router) { }

  ngOnInit(): void {
    this.headerService.changeTitre(this.titre);

    this.myGroup = this.fb.group({
      gender: this.fb.control('', Validators.required),
      firstname: this.fb.control('', Validators.required),
      lastname: this.fb.control('', Validators.required),
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern('^([a-z]*)@([a-z]{2,10}).(fr|com)$'),
      ]),
      condutilisation : this.fb.control('', Validators.requiredTrue),
      city: this.fb.control('', Validators.required),
      zipcode: this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      tel : this.fb.control('', [Validators.required,Validators.maxLength(10)  ,Validators.pattern("^(\\+33|0|0033)[1-9][0-9]{8}$")])
    });
  }

  get firstname(){
    return this.myGroup.get('firstname');
  }

  get lastname(){
    return this.myGroup.get('lastname');
  }

  get email(){
    return this.myGroup.get('email');
  }

  get city(){
    return this.myGroup.get('city');
  }

  get zipcode(){
    return this.myGroup.get('zipcode');
  }


  get tel(){
    return this.myGroup.get('tel');
  }

  get condutilisation(){
    return this.myGroup.get('condutilisation');
  }

  get gender(){
    return this.myGroup.get('gender');
  }

  get renovtraux(){
    return this.myGroup.get('renovtravauc')
  }

  checkBoxValue: boolean = true

  validation() {

  if(this.myGroup.valid){
    this.user = this.myGroup.value;
    this.mylocalStorage.setItem('User', JSON.stringify(this.user))
    // console.log(this.user.condutilisation);
  }




  }


  navigate() {
    this.route.navigate(['/affichtab']);
  }



  }


