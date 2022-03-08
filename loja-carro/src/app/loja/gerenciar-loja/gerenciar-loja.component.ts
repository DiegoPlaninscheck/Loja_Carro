import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  imagem;

  user: any;

  list = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.display();

    this.usuarioService.checarCarro()
      .then((resultado: (Object: (String)) => []) => {
        console.log("RESULTADO:", resultado)

        for (let i = 0; i < resultado.length; i++) {
          if (resultado[i].nome && resultado[i].marca &&
            resultado[i].modelo && resultado[i].valor && resultado[i].imagem) {
            this.nome = resultado[i].nome;
          }
          let a = {
            nome: resultado[i].nome,
            marca: resultado[i].marca,
            modelo: resultado[i].modelo,
            valor: resultado[i].valor,
            imagem: resultado[i].imagem
          }
          this.list.push(a);
        }


      }).catch(erro => {
        console.log("ERRO AO BUSCAR CARRO:", erro)
      })


  }

  // imagens() {
  //   for(let i = 0; i < this.list.length; i++){
  //     if(this.list[i].imagem === this.list[i].nome){
        
  //     }
  //   }
  // }


  display() {
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


  home(){
    document.location.reload();
  }

  logar() {
    this.router.navigate(['/login'])
  }

  detalhes() {
    this.router.navigate(['/produto'])
  }

  carrinho() {
    this.router.navigate(['/carrinho'])
  }

  suporte() {
    this.router.navigate(['/suporte'])
  }

  fornecedor() {
    this.router.navigate(['/fornecedor'])
  }

}

interface Car {
  nome: string,
  marca: string,
  modelo: string,
  valor: string
}
