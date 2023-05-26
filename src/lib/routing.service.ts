
// ROUTE PARAMETERS AND DATA MANAGEMENT


// provides methods for accessing and manipulating route parameters and sharing data between routes:

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class RoutingService {
    constructor(private router: Router, private route: ActivatedRoute) {}
    
    getRouteParams(): Params {
        return this.route.snapshot.params;
    }

    navigateToRoute(route: string, queryParams?: Params): void {
        this.router.navigate([route], { queryParams });
    }

    //now add route guards



}