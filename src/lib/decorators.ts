import { Route } from "@angular/router";
import { NgModule } from "@angular/core";

//route config
export function RouteConfig(route: Route) {
    return function(target: any) {
        Reflect.defineMetadata('routeConfig', route, target);
    }
}

// LAZY LOADING EASIER
export function LazyLoad(moduleFn: () => Promise<NgModule>) {
    return function(target: any) {
        Reflect.defineMetadata('lazyModule', moduleFn, target);
    }
}



