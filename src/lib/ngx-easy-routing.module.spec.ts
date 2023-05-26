import { TestBed, async  } from "@angular/core/testing";
import { NgxEasyRoutingModule } from './ngx-easy-routing.module';


describe('NgxEasyRoutingModule', () => {
    beforeEach(async( () => {
        TestBed.configureTestingModule({
            imports: [NgxEasyRoutingModule]
        }).compileComponents();
    }))

    it('should create the module', () => {
        const module = TestBed.get(NgxEasyRoutingModule);
        expect(module).toBeTruthy();
    })
})