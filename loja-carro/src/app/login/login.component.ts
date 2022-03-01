import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

import Swal from 'sweetalert2';

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
  Swal = undefined;
  
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private socialAuthService: AuthService,
    private usuarioService: UsuarioService
  ) { }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        localStorage.setItem('USER', this.user);
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
        // ...
        this.router.navigate([''])
      }
    );
  }

  ngOnInit() {
    this.tirar();
    this.usuarioService.checarPessoa()
      .then((resultado: (Object: (String)) => []) => {
        console.log("RESULTADO:", resultado)
        // this.user = resultado.user;
        // this.password = resultado.password;
      }).catch(erro => {
        console.log("ERRO AO BUSCAR USUÁRIO:", erro)
      })
  }

  logar() {
    this.usuarioService.checarPessoa()
      .then((resultado: User[]) => {
        for (let i = 0; i < resultado.length; i++) {
          if (this.user === resultado[i].nome && this.password === resultado[i].senha) {
            localStorage.setItem('USER', this.user)
            this.router.navigate([''])
            let timerInterval
            Swal.fire({
              title: 'Logando...',
              html: 'Redirecionado em <b></b> milissegundos.',
              timer: 500,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {

              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })
            return true;
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Login Inválido'
            })
          }
        }
        // this.user = resultado.user;
        // this.password = resultado.password;
      }).catch(erro => {
        console.log("ERRO AO BUSCAR USUÁRIO:", erro)
      })

  }

  tirar() {
    localStorage.removeItem('USER')
  }

  voltar() {
    this.router.navigate(['']);
  }

}

interface User {

  nome: string;
  senha: string;

}


