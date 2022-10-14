import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiKey
  constructor(private http: HttpClient) { }

  connect(data: any): Observable<any> {
    return this.http.post(this.apiUrl+'/api/login_check', data);
  }

}
