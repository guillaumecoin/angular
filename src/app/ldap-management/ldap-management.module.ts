import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdapManagementRoutingModule } from './ldap-management-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { LdapEditComponent } from '../ldap-edit/ldap-edit.component';
import { LdapAddComponent } from '../ldap-add/ldap-add.component';
import { AlertComponent } from '../share/alert/alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { LdapListComponent } from '../ldap-list/ldap-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUsersService } from '../service/in-memory-users.service';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from '../security/login/login.component';

@NgModule({
    declarations: [
      NavbarComponent,
        LdapListComponent,
        LdapAddComponent,
        LdapEditComponent,
        AlertComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppMaterialModule,
        LdapManagementRoutingModule,
        HttpClientModule,
        MatCardModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryUsersService, { dataEncapsulation: false }),
        
    ]
})
export class LdapManagementModule { }
