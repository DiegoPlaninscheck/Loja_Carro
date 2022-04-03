import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarLojaComponent } from './gerenciar-loja/gerenciar-loja.component';
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
  declarations: []
})
export class LojaModule { }
