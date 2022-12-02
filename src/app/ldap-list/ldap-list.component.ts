import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LDAP_USERS } from '../model/ldap-mock-data';
import { UserLdap } from '../model/user-Idap';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent {
  displayedColumns: string[] = ['nomComplet','mail','employeNumero'];
  dataSource = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor() {}

  ngOnInit():void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: UserLdap, filter: string) => this.filterPredicate(data, filter);
    this.getUsers();
  }

  filterPredicate(data, filter):boolean {
    return !filter || data.nomComplet.toMowerCase().startsWidth(filter);
  }

  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  unactiveSelected = false;

  private getUsers(): void {
    this.dataSource.data = LDAP_USERS;
    if(this.unactiveSelected) {
      this.dataSource.data = this.dataSource.data.filter (user => user.active === false);
    }
  }

  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers();
  }



  


}
