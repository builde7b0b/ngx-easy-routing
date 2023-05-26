import { TestBed } from '@angular/core/testing';
import { RouteConfig } from './decorators';
import { AppComponent } from 'src/app/app.component';

describe('RouteConfig', () => {
    it('should create a decorator', () => {

        const route = {
            path: '/',
            component: AppComponent
          };
        const config = RouteConfig(route);
        expect(config).toBeTruthy();
    })
})