import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessfullLoginPage } from './successfull-login.page';

describe('SuccessfullLoginPage', () => {
  let component: SuccessfullLoginPage;
  let fixture: ComponentFixture<SuccessfullLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuccessfullLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
