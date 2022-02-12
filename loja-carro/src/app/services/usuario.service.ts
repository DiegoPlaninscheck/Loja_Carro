import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  checarPessoa(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/checar_pessoa', {
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
