import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbaseComponent } from './footerbase.component';

describe('FooterbaseComponent', () => {
  let component: FooterbaseComponent;
  let fixture: ComponentFixture<FooterbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterbaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
