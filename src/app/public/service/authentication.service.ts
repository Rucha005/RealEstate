import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { Router, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isLoggedIn: any;
  redirectUrl: string;
  public loginLoader: boolean = false;
  url = environment.url;

  constructor(private httpCLient: HttpClient, 
    private router: Router, 
  ) { }

  login(loginData): Observable<any> {
    return this.httpCLient.post<any>(this.url + `auth`, loginData);
  }

  logout() {
    // remove user from local storage to log user out
    const snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
    this.router.navigate(['/admin/login'], { queryParams: { returnUrl: snapshot.url } });
    localStorage.removeItem('currentUser');
  }

  

}