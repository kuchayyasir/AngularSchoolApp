import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private dataservice :DataService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         console.log("AlwaysAuthGuard");
        if (!localStorage.getItem('pin')) {   
            return true;
        }
        
        if(this.dataservice.isVerified())
        {
            console.log('llll');
            return true;
        }
        console.log('lllllll');
        //this.router.navigate(['/verify']);       
        return true;
        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/verify']);//, { queryParams: { returnUrl: state.url }});
        //return false;
    }
}