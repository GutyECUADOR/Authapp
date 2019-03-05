import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosPageComponent } from './precios-page.component';

describe('PreciosPageComponent', () => {
  let component: PreciosPageComponent;
  let fixture: ComponentFixture<PreciosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreciosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
