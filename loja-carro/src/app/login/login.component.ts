import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioService } from "../services/usuario.service";

import { AuthService, GoogleLoginProvider } from "angular-6-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  nome = "";
  senha = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private socialAuthService: AuthService,
    private usuarioService: UsuarioService
  ) {}

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
      localStorage.setItem("USER", this.nome);
      console.log(socialPlatform + " sign in data : ", userData);
      // Now sign-in with userData
      // ...
      this.router.navigate([""]);
    });
  }
  ngOnInit() {}

  logar() {
    this.usuarioService
      .checarPessoa(this.nome, this.senha)
      .then((resultado: any) => {
        console.log(resultado);
        localStorage.setItem("NOME", resultado[0].NOME);
        localStorage.setItem("SENHA", resultado[0].SENHA);
        this.router.navigate([""]);
      })
      .catch((erro) => {
        console.log("ERRO AO BUSCAR USUÁRIO:", erro);
      });
  }
  voltar() {
    this.router.navigate([""]);
  }
}
