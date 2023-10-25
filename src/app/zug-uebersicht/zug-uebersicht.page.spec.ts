import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZugUebersichtPage } from './zug-uebersicht.page';

describe('ZugUebersichtPage', () => {
  let component: ZugUebersichtPage;
  let fixture: ComponentFixture<ZugUebersichtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZugUebersichtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
