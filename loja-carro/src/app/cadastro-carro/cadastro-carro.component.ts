import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro-carro',
  templateUrl: './cadastro-carro.component.html',
  styleUrls: ['./cadastro-carro.component.css']
})
export class CadastroCarroComponent implements OnInit {

  constructor(
    private Router: Router,
    private usuarioService: UsuarioService
  ) { }


  nome;
  placa;
  marca;
  modelo;
  valor;
  imagem;

  ngOnInit() {
  }

  cadastrar(){
    this.usuarioService.carro(this.nome, this.placa, this.marca, this.modelo, this.valor, this.imagem)
      .then((resultado: any) => {
        this.Router.navigate([''])
      }).catch(erro => {
        console.log("ERRO AO BUSCAR CARRO:", erro)
      })

  }

  voltar(){
    this.Router.navigate([''])
  }

}
