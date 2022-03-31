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

  cadastrar(NOME, SENHA, SOBRENOME, NASCIMENTO, EMAIL, ENDERECO_CODIGO){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/cadastrar', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({NOME, SENHA, SOBRENOME, NASCIMENTO, EMAIL, ENDERECO_CODIGO})
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

  endereco(PAIS, ESTADO, CIDADE, CEP){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/endereco', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({PAIS, ESTADO, CIDADE, CEP})
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

  carro(NOME, PLACA, MARCA, MODELO, VALOR, IMAGEM){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/carro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({NOME, PLACA, MARCA, MODELO, VALOR, IMAGEM})
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }
  
  checarEndereco(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/endereco_listar', {
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
