import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  url = environment.url;
  constructor(private http: HttpClient) {}

  getNotification(): Observable<any> {
    return this.http.get<any>(this.url + `driver/allnotifications`);
  }
  updateNotification(orderId): Observable<any> {
    return this.http.patch<any>(this.url + `driver/updatenotification`,orderId);
  }
}
