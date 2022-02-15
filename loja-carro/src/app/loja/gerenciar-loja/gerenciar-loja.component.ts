import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { listenerCount } from 'stream';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-gerenciar-loja',
  templateUrl: './gerenciar-loja.component.html',
  styleUrls: ['./gerenciar-loja.component.css']
})
export class GerenciarLojaComponent implements OnInit {

  nome = '';
  marca = '';
  modelo = '';
  valor = undefined;

  user: any;

  list = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.display();

    this.usuarioService.checarCarro()
    .then((resultado: (Object: (String)) => []) =>{
      console.log("RESULTADO:", resultado)
      
      for(let i = 0; i < resultado.length; i++){
        if(resultado[i].nome && resultado[i].marca &&
          resultado[i].modelo && resultado[i].valor){
          this.nome = resultado[i].nome;
          this.marca = resultado[i].marca;
          this.modelo = resultado[i].modelo;
          this.valor = resultado[i].valor;
        }
        let a = {
          nome: resultado[i].nome,
          marca: resultado[i].marca,
          modelo: resultado[i].modelo,
          valor: resultado[i].valor
        }
        this.list.push(a)
      }

    }).catch(erro => {
      console.log("ERRO AO BUSCAR CARRO:", erro)
    })

    
  }
  

  display(){
    this.user = localStorage.getItem('USER')
  }

  // informacoesCarro(){
  //   this.usuarioService.checarCarro()
  //   .then((resultado: Car[]) => {
  //     for(let i = 0; i < resultado.length; i++){
  //       if(resultado[i].nome && resultado[i].marca &&
  //         resultado[i].modelo && resultado[i].valor){
  //           this.nome = resultado[i].nome;
  //           this.marca = resultado[i].marca;
  //           this.modelo = resultado[i].modelo;
  //           this.valor = resultado[i].valor;
  //       }
  //     }
  //   }).catch(erro => {
  //     console.log("ERRO AO BUSCAR CARRO:", erro)
  //   })
  // }
  
  logar(){
    this.router.navigate(['/login'])
  }

  detalhes(){
    this.router.navigate(['/produto'])
  }

  carrinho(){
    this.router.navigate(['/carrinho'])
  }
}

interface Car{
  nome: string,
  marca: string,
  modelo: string,
  valor: string
}
