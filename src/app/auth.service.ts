import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable, delay, tap, of, catchError } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isloggedIn: boolean = false;
  isRegister: boolean = false;
  redirectUrl: string;

  constructor(private http: HttpClient){}

  login(username: string, password: string): Observable<any> {

    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }) // facultatif  
    };
    return this.http.post<any>('http://127.0.0.1:8000/api/login_check', {username, password}, httpOptions).pipe(
      tap(
        val => this.isloggedIn = true
        ),

      catchError((error) => this.handleError(error, undefined))
    );


  }

  register(email: EmailValidator, plainPassword: string): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/users', {email, plainPassword}).pipe(
      tap(
        response => this.isRegister = true
      ),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  logout(){
    this.isloggedIn = false;
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}
