import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LdapDetailComponent } from '../ldap-detail/ldap-detail.component';
import { UsersService } from '../service/users.service';
import {MatSnackBar, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
@Component({
  selector: 'app-ldap-edit',
  templateUrl: '../ldap-detail/ldap-detail.component.html',
  styleUrls: ['../ldap-detail/ldap-detail.component.css']
})
export class LdapEditComponent extends LdapDetailComponent  {
  

  constructor(private usersService: UsersService,private route: ActivatedRoute, fb:FormBuilder, router:Router, private snackBar: MatSnackBar) 
  {
    super(false, fb, router);
  }
  
  ngOnInit(): void {
    super.onInit(); 
    this.getUser();
    console.log("edit");
    this.processLoadRunning= false;

  }

  private getUser():void {
    const login = this.route.snapshot.paramMap.get('id');

    this.processLoadRunning= true;

    this.usersService.getUser(login).subscribe(
      user => {
        this.user = user; 
        this.copyUserToFormControl();
        this.processLoadRunning= true; 
      },
      error =>{
        this.processLoadRunning = false;
        this.errorMessage = 'L\'utilisateur n\'existe pas ! ';
        this.snackBar.open('Utilisateur non trouvé!', 'X');
      }
      );
  }

  validateForm(): void {
    console.log('LdapEditComponent - validateForm');
    this.processLoadRunning = true;
    this.usersService.updateUser(this.getUserFromFormCOntrol()).subscribe(
      data => {
        this.processLoadRunning = false;
        this.errorMessage = '';
        this.snackBar.open('Utilisateur modifier ! ', 'X');
      },
      error => {
        this.processLoadRunning = false;
        this.errorMessage = 'Une erreur est survenue dans la modification !';
        this.snackBar.open('Utilisateur non modifie !', 'X');
      }
    );
  }

  
}
