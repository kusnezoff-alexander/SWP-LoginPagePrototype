import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage2Page } from './login-page2.page';

describe('LoginPage2Page', () => {
  let component: LoginPage2Page;
  let fixture: ComponentFixture<LoginPage2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
