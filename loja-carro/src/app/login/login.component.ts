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
    this.usuarioService.buscarUsuarios()
    .then(resultado => {
      console.log("RESULTADO:", resultado)
      // this.user = resultado.user;
      // this.password = resultado.password;
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }

  logar(){
    // localStorage.setItem('USER', this.user);
    // localStorage.setItem("PASSWORD", this.password)
    // const users = [
    //   {login: 'Diego', password: '123'},
    //   {login: 'Planinscheck', password: '123'}
    // ];

    // const find = users.find(e => e.login == this.user && e.password == this.password);

    // if (find) {
    // localStorage.setItem('USER', this.user);
    // this.router.navigate(['/loja']);
    // } else {
    // alert('Usuário não cadastrado!');
    // }
    // this.router.navigate(['']);
  }

  voltar(){
    this.router.navigate(['']);
  }

}
