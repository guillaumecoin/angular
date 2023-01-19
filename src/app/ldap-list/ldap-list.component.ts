import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../service/users.service';
import { UserLdap } from '../model/user-Idap';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent {
  displayedColumns: string[] = ['nomComplet','mail','employeNumero'];
  dataSource = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(private usersService: UsersService, private router:Router) {}

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
    this.usersService.getUsers().subscribe(users => {
      if(this.unactiveSelected){
        this.dataSource.data = users.filter ( user =>
          user.active === false
          );
      } else {
        this.dataSource.data = users
      }
    })
    
    // if(this.unactiveSelected) {
    //   this.dataSource.data = this.dataSource.data.filter (user => user.active === false);
    // }
  }

  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers();
  }



  


}
