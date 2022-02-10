import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuarios(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/buscar_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

  login(nickname, password){
    return new Promise((resolve, reject) => {
      fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
            nickname: nickname,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (result){
        return result.json();
    }).then(function (dados){ 
        console.log(dados);
        alert('login efetuado')
    }).catch(function (erro){
        console.log(erro)
    });
    });
  }


}
