import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrationService } from 'src/app/service/registration.service';
import { BehaviorSubject } from 'rxjs';

describe('LandingPageComponent', () => {
  let fixture: ComponentFixture<LandingPageComponent>;
  let component: LandingPageComponent;
  const mockRegistrationService: any = {
    initializeRegistrationTab: new BehaviorSubject<boolean>(false),
  };
  let mockModalService: any;
  let router: Router;

  beforeEach(
    waitForAsync(() => {
      mockModalService = jasmine.createSpyObj(['openModal']);
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatDialogModule,
          BrowserAnimationsModule,
          MatToolbarModule,
        ],
        declarations: [LandingPageComponent],
        providers: [
          { provide: RegistrationService, useValue: mockRegistrationService },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should select tab home', () => {
  //   const route = `/${component.tabs[0].route}`;
  //   spyOnProperty(router, 'url', 'get').and.returnValue(route);
  //   fixture.detectChanges();
  //   expect(router.url).toEqual(route);
  // });

  // it('should select tab about', () => {
  //   const route = `/${component.tabs[1].route}`;
  //   spyOnProperty(router, 'url', 'get').and.returnValue(route);
  //   fixture.detectChanges();
  //   expect(router.url).toEqual(route);
  // });

  // it('should open the login modal', () => {
  //   component.loginModal();
  //   expect(mockModalService.openModal).toHaveBeenCalled();
  // });

  // it('should select the parent component if not of type button', () => {
  //   fixture.detectChanges();
  //   const child: HTMLElement = document.getElementById(
  //     `${component.tabs[1].name}Tab`
  //   ).firstChild as HTMLElement;
  //   component.selectTab(child);
  //   expect(component.lastSelectedTab).toEqual(child.parentElement);
  // });
});
