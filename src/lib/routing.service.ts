
// ROUTE PARAMETERS AND DATA MANAGEMENT


// provides methods for accessing and manipulating route parameters and sharing data between routes:

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, ActivatedRoute, Params, Router, CanActivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import 'reflect-metadata';


@Injectable({
    providedIn: 'root'
})

export class RoutingService implements CanActivate {
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // Implement your guard logic here
        return true; // Or perform actual guard checks
      }
    
      getRouteParams(): any {
        if (this.activatedRoute.snapshot) {
          return this.activatedRoute.snapshot.params;
        } else {
          return {};
        }
      }
      

    navigateToRoute(route: string, queryParams?: Params): void {
        this.router.navigate([route], { queryParams });
    }

    isActive(url: string): boolean {
        return this.router.isActive(url, false);
    }

    //now add route guards



    // add HELPERS FOR ROUTING TASKS

    getCurrentRoute(): string {
        return this.router.url;
    }

    getQueryParams(): Params {
        return this.activatedRoute.snapshot.queryParams;

    }

}