import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';
import { LDAP_USERS } from '../model/ldap-mock-data';
import { UserLdap } from '../model/user-Idap';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   users: UserLdap[] = LDAP_USERS;
   //  private usersUrl = 'api/users';
   private usersUrl = '';
   private httpOptions = new HttpHeaders({'Content-Type': 'application/json'});
  
   constructor(private http: HttpClient) { 
    this.usersUrl = environment.usersApiUrl;
   }

  


  getUsers(): Observable<UserLdap[]> {
    // return of(this.users);
    return this.http.get<UserLdap[]>(this.usersUrl);
  }

  getUser(id: number) : Observable<UserLdap> {
    // return of(this.users.find(user => user.login === login));
    return this.http.get<UserLdap>(this.usersUrl + '/'+ id);
  }
  addUser(user: UserLdap): Observable<UserLdap> {
    // this.users.push(user);
    // return of(user);
    return this.http.post<UserLdap>(this.usersUrl, user, {
      headers: this.httpOptions
    });
  }

  updateUser(user: UserLdap): Observable<UserLdap> {
    // const user = this.users.find(u=> u.login === userToUpdate.login);
    // if (user) {
    //   user.nom = userToUpdate.nom;
    //   user.prenom = userToUpdate.prenom;
    //   user.nomComplet = userToUpdate.nomComplet;
    //   user.motDePasse = userToUpdate.motDePasse;

    //   return of(userToUpdate);
    // }
    // return throwError('Utilisateur non trouvé');

    return this.http.put<UserLdap>(this.usersUrl + '/' + user.id,
    user, {headers: this.httpOptions}
    )
  } 

  deleteUser(id: number): Observable<UserLdap> {
    return this.http.delete<UserLdap>(this.usersUrl + '/' + id,    
    {
     headers: this.httpOptions
    })
  }
}
