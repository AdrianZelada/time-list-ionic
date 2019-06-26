import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTabsPage } from './footer-tabs.page';

describe('FooterTabsPage', () => {
  let component: FooterTabsPage;
  let fixture: ComponentFixture<FooterTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
