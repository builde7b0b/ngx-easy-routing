
// ROUTE PARAMETERS AND DATA MANAGEMENT


// provides methods for accessing and manipulating route parameters and sharing data between routes:

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, ActivatedRoute, Params, Router, CanActivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RoutingService implements CanActivate {
    constructor(private router: Router, private route: ActivatedRoute) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // Implement your guard logic here
        return true; // Or perform actual guard checks
      }
    
    getRouteParams(): Params {
        return this.route.snapshot.params;
    }

    navigateToRoute(route: string, queryParams?: Params): void {
        this.router.navigate([route], { queryParams });
    }

    //now add route guards



    // add HELPERS FOR ROUTING TASKS

    getCurrentRoute(): string {
        return this.router.url;
    }

    getQueryParams(): Params {
        return this.route.snapshot.queryParams;
        
    }

}