import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LdapListComponent } from './ldap-list/ldap-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { LdapDetailComponent } from './ldap-detail/ldap-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LdapEditComponent } from './ldap-edit/ldap-edit.component';
import { LdapAddComponent } from './ldap-add/ldap-add.component';
import { AlertComponent } from './share/alert/alert.component';
import { LdapManagementModule } from './ldap-management/ldap-management.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUsersService } from './service/in-memory-users.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
   FormsModule,
   ReactiveFormsModule,
   BrowserAnimationsModule,
   AppMaterialModule,
   LdapManagementModule,
   AppRoutingModule,
   HttpClientModule,

   HttpClientInMemoryWebApiModule.forRoot(
    InMemoryUsersService, {dataEncapsulation: false}
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
