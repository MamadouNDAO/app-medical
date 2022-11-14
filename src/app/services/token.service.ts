import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public saveToken(value: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, value);
  }

  public getToken(): any {
    return localStorage.getItem(TOKEN_KEY);
  }

  public removeToken(): any{
    return localStorage.removeItem(TOKEN_KEY);
  }

}
