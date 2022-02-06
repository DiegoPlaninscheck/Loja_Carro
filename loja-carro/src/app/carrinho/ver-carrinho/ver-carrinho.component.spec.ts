import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCarrinhoComponent } from './ver-carrinho.component';

describe('VerCarrinhoComponent', () => {
  let component: VerCarrinhoComponent;
  let fixture: ComponentFixture<VerCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
