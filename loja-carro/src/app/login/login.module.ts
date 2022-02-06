import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    NgModel,
    LoginComponent,
  ],
  declarations: []
})
export class LoginModule { }
