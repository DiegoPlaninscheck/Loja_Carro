import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-editar-carro',
  templateUrl: './editar-carro.component.html',
  styleUrls: ['./editar-carro.component.css']
})
export class EditarCarroComponent implements OnInit {
  
  id;
  nome;
  placa;
  marca;
  modelo;
  valor;
  imagem;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.id = this.router.url.substring(this.router.url.length - 1)
    this.usuarioService.checarCarro()
    .then((resultado: any) => {
      resultado.find(valorCarro => {
        if(valorCarro.id >= 10){
          this.id = this.router.url.substring(this.router.url.length - 2)
        }
        if(valorCarro.id == this.id){
          this.nome = valorCarro.nome
          this.placa = valorCarro.placa
          this.marca = valorCarro.marca
          this.modelo = valorCarro.modelo
          this.valor = valorCarro.valor
        }
      })
    }).catch (erro => {
      console.log("ERRO AO BUSCAR CARRO:", erro)
    })
  }

  editarCarro(){
    this.id = this.router.url.substring(this.router.url.length - 1)
    this.usuarioService.editarCarro(this.nome, this.placa, this.marca, this.modelo, this.valor, this.imagem)
    .then((resultado: any) => {
        this.router.navigate([''])
      
    }).catch(erro => {
      console.log("ERRO AO EDITAR CARRO:", erro)
    })
  }

  voltar() {
    this.router.navigate([''])
  }

}
