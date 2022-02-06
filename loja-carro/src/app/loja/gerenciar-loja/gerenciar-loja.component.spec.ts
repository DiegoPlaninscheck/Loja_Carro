import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarLojaComponent } from './gerenciar-loja.component';

describe('GerenciarLojaComponent', () => {
  let component: GerenciarLojaComponent;
  let fixture: ComponentFixture<GerenciarLojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarLojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
