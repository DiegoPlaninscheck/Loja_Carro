import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarLojaComponent } from './gerenciar-loja/gerenciar-loja.component';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GerenciarLojaComponent, ProdutoComponent]
})
export class LojaModule { }
