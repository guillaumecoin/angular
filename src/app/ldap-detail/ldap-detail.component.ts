import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../service/users.service';
import { UserLdap } from '../model/user-Idap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ldap-detail',
  templateUrl: './ldap-detail.component.html',
  styleUrls: ['./ldap-detail.component.css']
})
export class LdapDetailComponent {

  user: UserLdap;
  processLoadRunning = false;
  processValidateRunning = false;
  constructor( private route: ActivatedRoute, private usersService: UsersService, private router:Router,private fb:FormBuilder) 
  {

  }

  userForm = this.fb.group({
    login: [''],
    nom: [''],
    prenom: [''],
    passwordGroup: this.fb.group({
      password: [''],
      confirmPassword: ['']
    }),
    mail: {value: '', disabled: true},

  })

  ngOnInit(): void {
    this.getUser();
  }

  private getUser():void {
    const login = this.route.snapshot.paramMap.get('id');

    this.usersService.getUser(login).subscribe(
      user => {this.user = user; console.log("LdapDetail getUser=");console.log(user); }
      );
  }

  private formGetValue(name: string): any {
    return this.userForm.get(name).value;
  }
  goToLdap() : void {
    this.router.navigate(['/users/list']);
  }

  updateLogin(): void {
    this.userForm.get('login').setValue((this.formGetValue('prenom')+'.'+this.formGetValue('nom')).toLowerCase());
    this.updateMail();
  }

  updateMail(): void {
    this.userForm.get('mail').setValue(this.formGetValue('login').toLowerCase()+'@epsi.lan');
  }
  


  onSubmitForm(): void {}
  isFormValid(): boolean {return false;}



}
