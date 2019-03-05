import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtegidaPageComponent } from './protegida-page.component';

describe('ProtegidaPageComponent', () => {
  let component: ProtegidaPageComponent;
  let fixture: ComponentFixture<ProtegidaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtegidaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtegidaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
