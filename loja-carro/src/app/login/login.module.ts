import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LojaModule } from '../loja/loja.module';
import { LojaComponent } from '../loja/loja.component';

@NgModule({
  imports: [
    CommonModule,
    NgModel,
    LoginComponent,
    LojaModule,
    LojaComponent,
  ],
  declarations: []
})
export class LoginModule { }
