// src/app/auth/login/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

interface LoginResponse {
  access: string;
  refresh: string;
}

interface DecodedToken {
  user_id: number;
  username: string;
  role: 'admin' | 'farmer';
  is_staff: boolean;
  is_superuser: boolean;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';
  private currentUserSubject = new BehaviorSubject<DecodedToken | null>(this.getCurrentUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login/`, { username, password })
      .pipe(
        tap(response => {
          this.storeTokens(response);
          
          const user = this.getCurrentUser();
          this.currentUserSubject.next(user);
          
          // Route based on role
          if (user?.role === 'admin') {
            this.router.navigate(['/sample-page']);
          } else {
            this.router.navigate(['/sample-page']);
          }
        })
      );
  }

  private storeTokens(response: LoginResponse): void {
    localStorage.setItem('access_token', response.access);
    localStorage.setItem('refresh_token', response.refresh);
    
    const decoded: DecodedToken = jwtDecode(response.access);
    localStorage.setItem('user', JSON.stringify(decoded));
    localStorage.setItem('user_role', decoded.role);
    localStorage.setItem('username', decoded.username);
  }

  getCurrentUser(): DecodedToken | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  getRole(): 'admin' | 'farmer' | null {
    return localStorage.getItem('user_role') as 'admin' | 'farmer' | null;
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }

  isFarmer(): boolean {
    return this.getRole() === 'farmer';
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) return false;
    
    try {
      const decoded: any = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();
      return !isExpired;
    } catch {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    localStorage.removeItem('user_role');
    localStorage.removeItem('username');
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
}