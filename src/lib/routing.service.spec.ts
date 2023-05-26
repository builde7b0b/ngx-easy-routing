import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, UrlSegment, ActivatedRouteSnapshot } from '@angular/router';
import { RoutingService } from './routing.service';

describe('RoutingService', () => {
  let service: RoutingService;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  const mockActivatedRouteSnapshot: Partial<ActivatedRouteSnapshot> = {
    url: [new UrlSegment('', {})],
    paramMap: {
      has: (name: string) => false,
      get: (name: string) => null,
      getAll: (name: string) => [],
      keys: []
    },
    queryParamMap: {
      has: (name: string) => false,
      get: (name: string) => null,
      getAll: (name: string) => [],
      keys: []
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoutingService,
        { provide: Router, useValue: { navigateByUrl: jasmine.createSpy('navigateByUrl'), isActive: jasmine.createSpy('isActive') } },
        { provide: ActivatedRoute, useValue: { snapshot: mockActivatedRouteSnapshot } }
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
    spyOn(router, 'navigateByUrl');
    const route = '/dashboard';
    service.navigateToRoute(route);
    expect(router.navigateByUrl).toHaveBeenCalledWith(route);
  });

  it('should get route parameters', () => {
    const params = { id: '123', category: 'books' };
    activatedRoute.snapshot.params = params;
    const result = service.getRouteParams();
    expect(result).toEqual(params);
  });

  it('should check if a route is active', () => {
    spyOn(router, 'isActive').and.returnValue(true);
    const route = '/dashboard';
    const result = service.isActive(route);
    expect(result).toBeTruthy();
    expect(router.isActive).toHaveBeenCalledWith(route, jasmine.anything());
  });
});
