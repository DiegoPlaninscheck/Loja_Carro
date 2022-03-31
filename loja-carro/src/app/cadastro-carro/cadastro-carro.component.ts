import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-carro',
  templateUrl: './cadastro-carro.component.html',
  styleUrls: ['./cadastro-carro.component.css']
})
export class CadastroCarroComponent implements OnInit {

  constructor() { }


  nome;
  placa;
  marca;
  modelo;
  valor;
  imagem;

  ngOnInit() {
  }

  cadastrar(){
    
  }

}
