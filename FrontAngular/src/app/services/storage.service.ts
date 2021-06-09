import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Session } from "../models/session.model";
import { User } from "../models/users.model";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentSession: Session | null;

  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): Session | null {
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session>JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session | null{
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): User | null {
    var session = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string | null {
    var session = this.getCurrentSession();
    return (session && session.accessToken) ? session.accessToken : null;
  };

  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(['/login']);  
   
  }

}
