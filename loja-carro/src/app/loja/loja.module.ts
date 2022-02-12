import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarLojaComponent } from './gerenciar-loja/gerenciar-loja.component';
import { ProdutoComponent } from './produto/produto.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: GerenciarLojaComponent, /* canActivate: [CheckLogged] */},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ProdutoComponent]
})
export class LojaModule { }
