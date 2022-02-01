import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    NgModel,
    LoginComponent,
    LoginModule
  ],
  declarations: []
})
export class LojaModule { }
