import { Route } from "@angular/router";


export function RouteConfig(route: Route) {
    return function(target: any) {
        Reflect.defineMetadata('routeConfig', route, target);
    }
}