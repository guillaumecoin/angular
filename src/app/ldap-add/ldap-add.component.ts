import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LdapDetailComponent } from '../ldap-detail/ldap-detail.component';
import { LdapEditComponent } from '../ldap-edit/ldap-edit.component';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-ldap-add',
  templateUrl: '../ldap-detail/ldap-detail.component.html',
  styleUrls: ['../ldap-detail/ldap-detail.component.css']
})
export class LdapAddComponent extends LdapDetailComponent  {

  constructor(private usersService: UsersService, fb:FormBuilder, router:Router, private snackBar:MatSnackBar)
  {
    super(true, fb, router);
  }

  ngOnInit(): void {
    super.onInit(); 

  }

  validateForm(): void {
        console.log('LdapAddComponent - validateForm')

        this.processLoadRunning = true;
        this.usersService.addUser(this.getUserFromFormCOntrol()).subscribe(
          data => {
            this.processValidateRunning = false;
            this.errorMessage = '';
            this.snackBar.open('Utilisateur   jouté ! ', 'X');
          },
          error => {
            this.processValidateRunning = false;
            this.errorMessage = 'L\'utilisateur n\'a pas pu être ajouté !';
            this.snackBar.open('Erreur dans l\'ajout de l\'utilisateur !', 'X');
          }
        );
      }
    


}
