import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './guards/auth.interceptor';
import { AuthGuard } from './public/service/auth-guard.service';
import { AuthenticationService } from './public/service/authentication.service';
import { ToastrModule } from 'ngx-toastr';
import { AlertService } from './public/service/alert.service';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoaderInterceptor } from './public/loader.interceptor';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { ChatModule } from './modules/chat/chat.module';
 
const config: SocketIoConfig = { url: environment.url, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    ChatModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    SocketIoModule.forRoot(config),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar:true,
    }),
    RouterModule.forRoot(AppRoutes)    
  ],
  providers: [Title,CookieService,AuthGuard, AlertService, AuthenticationService, 
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  DatePipe,  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
