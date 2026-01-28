import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingPage } from './app-landing-page';

describe('AppLandingPage', () => {
  let component: AppLandingPage;
  let fixture: ComponentFixture<AppLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLandingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
