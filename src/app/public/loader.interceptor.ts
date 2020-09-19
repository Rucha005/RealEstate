import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loaderService: Ng4LoadingSpinnerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        this.loaderService.show();
        return next.handle(req).pipe(
            finalize(() => this.loaderService.hide())
        );


    }
}
