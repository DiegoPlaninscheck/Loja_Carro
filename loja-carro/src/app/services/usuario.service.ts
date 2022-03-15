import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  checarPessoa(NOME, SENHA){
    return new Promise((resolve, reject) => {
      fetch('/api/checar_pessoa', 
      {
        method: 'POST',
        body: JSON.stringify({NOME, SENHA}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resolve => resolve.json())
      .then(resolvido => resolve(resolvido))
      .catch(reject);
    })
  }

  checarCarro(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/checar_carro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

  


}
