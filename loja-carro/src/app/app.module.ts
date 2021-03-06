import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login/login.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import CheckLogged from "./checkLogged.canActivate";
import CheckLogged_Carro from "./checkLoggged_Carro.canActivated";

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login";
import { ProdutoComponent } from "./loja/produto/produto.component";
import { GerenciarLojaComponent } from "./loja/gerenciar-loja/gerenciar-loja.component";
import { VerCarrinhoComponent } from "./carrinho/ver-carrinho/ver-carrinho.component";
import { CarrinhoModule } from "./carrinho/carrinho.module";
import { SuporteComponent } from "./loja/suporte/suporte.component";
import { FornecedorComponent } from "./loja/fornecedor/fornecedor.component";
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { CadastroCarroComponent } from './adm/cadastro-carro/cadastro-carro.component';
import { EditarCarroComponent } from './adm/editar-carro/editar-carro.component';
import { PagamentoComponent } from './loja/pagamento/pagamento.component';

const routes: Routes = [
  { path: "", component: GerenciarLojaComponent, canActivate: [] },
  { path: "produto/:id_produto", component: ProdutoComponent, canActivate: [] },
  {path: "editarCarro/:id_produto", component: EditarCarroComponent, canActivate: [CheckLogged_Carro]},
  { path: "login", component: LoginComponent, canActivate: [] },
  {path: "cadastro", component: CadastroComponent, canActivate: []},
  {path: "cadastrarCarro", component: CadastroCarroComponent, canActivate: [CheckLogged_Carro]},
  {path: "carrinho", component: VerCarrinhoComponent, canActivate: [CheckLogged]},
  { path: "suporte", component: SuporteComponent, canActivate: [] },
  { path: "fornecedor", component: FornecedorComponent, canActivate: [] },
  { path: "pagamento", component: PagamentoComponent, canActivate: [CheckLogged] }
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        "402231336047-9jsgeagvcoa8fqb6eled83fj2hnodt5d.apps.googleusercontent.com"
      ),
    },
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdutoComponent,
    GerenciarLojaComponent,
    SuporteComponent,
    FornecedorComponent,
    CadastroComponent,
    CadastroCarroComponent,
    EditarCarroComponent,
    PagamentoComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    CarrinhoModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    },
    CheckLogged,
    CheckLogged_Carro
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
