import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  // login(nickname, password){
  //   return new Promise((resolve, reject) => {
  //     fetch('/api/selecionar_usuario', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //           nickname: nickname,
  //           password: password
  //       }),
  //       headers: {
  //           'Content-Type': 'application/json'
  //       }
  //   }).then(function (result){
  //       return result.json();
  //   }).then(function (dados){ 
  //       console.log(dados);
  //       alert('login efetuado')
  //   }).catch(function (erro){
  //       console.log(erro)
  //   });
  //   });
  // }


}
