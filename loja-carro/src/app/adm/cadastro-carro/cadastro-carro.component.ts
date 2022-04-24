import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

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

  ngOnInit() {
  }

  cadastrar(){
    this.usuarioService.carro(this.nome, this.placa, this.marca, this.modelo, this.valor, this.imageUrl)
      .then((resultado: any) => {
        this.Router.navigate([''])
      }).catch(erro => {
        console.log("ERRO AO CADASTRAR CARRO:", erro)
      })

  }

  imgURL;
  srcResult

  onFileSelected(event) {
    const file = new FileReader();
    file.onload = (e) => {
      this.imgURL = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }


  input;

  limparImagem() {
    console.log('limpar');
    this.imageUrl = '';

    this.input.value = '';


  }

  imageUrl = '';

  imagemMudou(event) {
    this.input = event.target

    const reader = new FileReader()

    reader.onload = (result) => {
      this.imageUrl = result.target.result as string;
    }

    reader.readAsDataURL(event.target.files[0]);
  }


  voltar(){
    this.Router.navigate([''])
  }

}
