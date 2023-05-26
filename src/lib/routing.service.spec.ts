import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, UrlSegment, ActivatedRouteSnapshot, convertToParamMap } from '@angular/router';
import { RoutingService } from './routing.service';

describe('RoutingService', () => {
  let service: RoutingService;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoutingService,
        { 
          provide: Router, 
          useValue: { 
            navigate: jasmine.createSpy('navigate').and.returnValue(Promise.resolve(true)),
            navigateByUrl: jasmine.createSpy('navigateByUrl').and.returnValue(Promise.resolve(true)),
            isActive: jasmine.createSpy('isActive').and.returnValue(true) 
          } 
        },
        { 
          provide: ActivatedRoute, 
          useValue: { 
            snapshot: {
              paramMap: convertToParamMap({ id: '123', category: 'books' })
            } 
          } 
        }
      ]
    });
    service = TestBed.inject(RoutingService);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should navigate to a specific route', () => {
    const route = '/dashboard';
    service.navigateToRoute(route);
    expect(router.navigate).toHaveBeenCalledWith([route], jasmine.anything());
  });

  it('should get route parameters', () => {
    const params = { id: '123', category: 'books' };
    const result = service.getRouteParams();
    expect(result).toEqual(params);
  });

  it('should check if a route is active', () => {
    const route = '/dashboard';
    const result = service.isActive(route);
    expect(result).toBeTruthy();
    expect(router.isActive).toHaveBeenCalledWith(route, jasmine.anything());
  });
});
