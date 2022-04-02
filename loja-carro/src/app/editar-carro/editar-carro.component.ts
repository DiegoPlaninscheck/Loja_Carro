import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-editar-carro',
  templateUrl: './editar-carro.component.html',
  styleUrls: ['./editar-carro.component.css']
})
export class EditarCarroComponent implements OnInit {
  
  nome;
  placa;
  marca;
  modelo;
  valor;
  imagem;

  constructor(
    private Router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  editarCarro(){
    this.usuarioService.editarCarro(this.nome, this.placa, this.marca, this.modelo, this.valor, this.imagem)
    .then((resultado: any) => {
      this.Router.navigate([''])
    }).catch(erro => {
      console.log("ERRO AO EDITAR CARRO:", erro)
    })
  }

  voltar() {
    this.Router.navigate([''])
  }

}
