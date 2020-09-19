import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router,ActivatedRoute,RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../public/service/authentication.service';
import {of} from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  url
  urlparam

  constructor(private activatedRoute: ActivatedRoute, private authSevice: AuthenticationService) {}

  intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    this.activatedRoute.url.subscribe(activeUrl => {
      this.url = window.location.pathname;
    
      var arr = [];
      arr = this.url.split("/", 6);
      let lastparam = arr[2]
      if(lastparam  === 'forgotpassword'){
        this.url = '/admin/forgotpassword'
      }
    });
    if ((this.url !== "/admin/login") && (this.url !== "/admin/forgotpassword") && (this.urlparam !== '' )) {
      const authToken = JSON.parse(localStorage.getItem("currentUser")).token;
      request = request.clone({
        setHeaders: {
          Authorization: `${authToken}`
        }
      });
    }
    return next.handle(request).pipe(
      tap(
        succ => {},
        err => {
          if (err.status === 401) {
            this.authSevice.logout();
          }

        }
      )
    );
  }
}