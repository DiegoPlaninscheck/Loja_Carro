import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioService } from "../../services/usuario.service";

import { AuthService, GoogleLoginProvider } from "angular-6-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  nome = "";
  senha = "";
  id = "11";
  email = "";

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
      console.log(socialPlatform + " sign in data : ", userData);
      this.nome = userData.name
      this.email = userData.email
      this.usuarioService.entrarGoogle(this.nome, this.email);
      this.usuarioService.pessoa().then((resultado: any) => {
        resultado.find((pessoa) => {
          if(this.id == pessoa.ID){
            console.log("passo")
            this.id = pessoa.id;
          }
        })
      })
      localStorage.setItem("ID", this.id);
      localStorage.setItem("USER", this.nome);
      this.router.navigate([""]);
    });
  }

  ngOnInit() {}

  logar() {
    if(this.nome && this.senha){
      this.usuarioService
      .checarPessoa(this.nome, this.senha)
      .then((resultado: any) => {
        if(resultado[0].FUNCIONARIO == true){
          localStorage.setItem("FUNCIONARIO", "1")
          this.router.navigate(["/cadastrar"]);
        }

        if(resultado != ""){
          localStorage.setItem("NOME", resultado[0].NOME);
          localStorage.setItem("SENHA", resultado[0].SENHA);
          localStorage.setItem("ID", resultado[0].ID)
          this.router.navigate([""]);
        } else{
            alert("Usuário ou senha não encontrado!");
        }
      })
      .catch((erro) => {
        console.log("ERRO AO BUSCAR USUÁRIO:", erro);
      });
    } else {
      alert("Preencha todos os campos!")
    }
    
  }

  cadastrar(){
    this.router.navigate(["/cadastro"]);
  }

  voltar() {
    this.router.navigate([""]);
  }
}
