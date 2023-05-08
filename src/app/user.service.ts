import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  register(userInfo: any): Observable<any> {
    return this.http.post('https://localhost:5000/user/register', userInfo);
  }

  login(credentials: any): Observable<any> {
    return this.http.post('https://localhost:5000/user/signin', credentials);
  }
  getCenters(): Observable<any> {
    return this.http.get('https://localhost:5000/user/centers');
  }
}
