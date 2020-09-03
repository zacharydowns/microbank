import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ThemingService } from './service/theming.service';
import { BehaviorSubject } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  const theme: string = 'dark-theme';
  let mockThemingService: any;

  beforeEach(async(() => {
    mockThemingService = jasmine.createSpyObj(['setVariablesAndRefresh']);
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: ThemingService, useValue: mockThemingService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    mockThemingService.theme = new BehaviorSubject(theme);
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should instantiate host binding class', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.getAttribute('class')).toEqual(theme);
  });

  it('should call theming service to set variables', () => {
    expect(mockThemingService.setVariablesAndRefresh).toHaveBeenCalled();
  });
});
