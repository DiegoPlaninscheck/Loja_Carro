import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';

  constructor(
    private router: Router,
    private route:  ActivatedRoute,
    private socialAuthService: AuthService,
    private usuarioService: UsuarioService
    ) { }


    public socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
       if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          localStorage.setItem('USER', this.user);
          console.log(socialPlatform + " sign in data : " , userData);
          // Now sign-in with userData
          // ...
          this.router.navigate([''])
        }
      );
    }

  ngOnInit() {
    this.usuarioService.checarPessoa()
    .then((resultado: (Object: (String))  => [])=> {
      console.log("RESULTADO:", resultado)
      // this.user = resultado.user;
      // this.password = resultado.password;
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }

  logar(){
    this.usuarioService.checarPessoa()
    .then((resultado: User[])=> {
      for(let i = 0; i < resultado.length; i++){
        if(this.user === resultado[i].nome && this.password === resultado[i].senha){
          this.router.navigate([''])
        }
      }
      // this.user = resultado.user;
      // this.password = resultado.password;
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }

  voltar(){
    this.router.navigate(['']);
  }

}

interface User {

  nome: string;
  senha: string;

}


