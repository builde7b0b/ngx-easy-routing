import { Route } from "@angular/router";
import { NgModule, Type } from "@angular/core";
import 'reflect-metadata';


//route config
export function RouteConfig(route: Route): (target: Type<any>) => void {
    return function(target: Type<any>) {
        Reflect.defineMetadata('routeConfig', route, target);
    }
}

// LAZY LOADING EASIER
export function LazyLoad(moduleFn: () => Promise<NgModule>) {
    return function(target: any) {
        Reflect.defineMetadata('lazyModule', moduleFn, target);
    }
}





