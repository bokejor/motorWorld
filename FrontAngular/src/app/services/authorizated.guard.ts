import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StorageService } from "./storage.service";

@Injectable(
    {providedIn: 'root'}
)
export class AuthorizatedGuard implements CanActivate {

    constructor(private router: Router,
        private storageService: StorageService) { }

    

    canActivate() {        
        if (this.storageService.isAuthenticated()) {
            this.storageService.isAuth.next(true);
           return true;
        }
       
        this.router.navigate(['/login']);    
        this.storageService.isAuth.next(false);
        return false;
    }
}