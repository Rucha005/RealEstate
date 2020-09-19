import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthenticationService
} from '../../public/service/authentication.service';
import {
  Router, RouterStateSnapshot, ActivatedRoute
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData:any = {};
  loginLoader: boolean = false;
  returnUrl: string;

  constructor(private loginService: AuthenticationService, private toastr: ToastrService,private router: Router,  
    private route: ActivatedRoute) {
      localStorage.clear()
    }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  trimming_fn(x) {    
    return x ? x.replace(/^\s+|\s+$/gm, '') : '';    
}; 

  login(value) {
    let loginData = {
      email: value.email,
      password: value.password,
      // role_id: 1
    }

    this.loginService.login(loginData).subscribe(res => {
      this.loginLoader = true;
      
      if (res.status === true) {
        this.toastr.success('', 'Login Successfull!');

        localStorage.setItem('currentUser', JSON.stringify(res));
       // //console.log("token data" + JSON.stringify(res))
       // this.cookieService.set('currentUser', JSON.stringify(res))
        setTimeout(() => {
          this.loginLoader = false;
          if(this.returnUrl){
            this.router.navigateByUrl(this.returnUrl);
          }
          if(res.user_data.permissionLevel == 1)
          {
            this.router.navigate(['/dashboard']);
          }
          else
          {
            this.router.navigate(['/officeuserdashboard']);
          }
        }, 2000);
      }
    }, error => {
      this.loginLoader = true;
      setTimeout(() => {
        this.loginLoader = false;
        if(error.error.message){
          this.toastr.error('', error.error.message);   
        }
        else if(error.error.errors){
          this.toastr.error('', error.error.errors);   
        }
      }, 1000);
    })
  }
}