import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailserviceService {

  private apiUrl = 'http://localhost:8080/designweb/mailSend';

  constructor(private http: HttpClient) { }

  sendEmailMessage(formData: any): Observable<any>{
    return this.http.post(this.apiUrl, formData);
  }
}
