import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LojaComponent } from './loja/loja.component';
import { FormsModule } from '@angular/forms';

import CheckLogged from './checkLogged.canActivate';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login";
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {path: '', component: LojaComponent, canActivate: [CheckLogged]},
  {path: 'login', component: LoginComponent, canActivate: []},
  {path: 'produto', component: ProdutoComponent, canActivate: [CheckLogged]}
];


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("402231336047-9jsgeagvcoa8fqb6eled83fj2hnodt5d.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LojaComponent,
    ProdutoComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    CheckLogged
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
