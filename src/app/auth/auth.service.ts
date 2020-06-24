import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { QueryService } from '../services/query.service';
import { LoadingIndicatorService } from '../services/loading-indicator.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  constructor(private queryService: QueryService,  private http: HttpClient, private loadingIndicatorService: LoadingIndicatorService) {}

  login(loginForm): Observable<User[]> {
    const queryObject = {
      email: loginForm.email,
      password: loginForm.password
    };
    const query = this.queryService.buildQueryString(queryObject);
    
    this.loadingIndicatorService.show(); 
    return this.http.get<User[]>(`users${query}`);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
