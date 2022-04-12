import { Injectable } from '@angular/core';

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

  pessoa(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/pessoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
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

  editarCarro(NOME, PLACA, MARCA, MODELO, VALOR, IMAGEM, ID){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/editar_carro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({NOME, PLACA, MARCA, MODELO, VALOR, IMAGEM, ID})
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

  editarEndereco(CODIGO, PAIS, ESTADO, CIDADE, CEP){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/editar_endereco', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({CODIGO, PAIS, ESTADO, CIDADE, CEP})
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }
  
  carrinho(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/produto_listar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

  comprar(ID_PESSOA , ID_CARRO){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/comprar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ID_PESSOA ,ID_CARRO})
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

  
  listarCarrinho(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/carrinho_listar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

  cliente(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/comprador_listar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
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

  listarPessoas(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/pessoa_listar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }
  
  deletarCarrinho(ID_PESSOA){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/deletar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ID_PESSOA})
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }
}



