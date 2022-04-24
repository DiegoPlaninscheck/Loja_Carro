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
  placa = '';
  marca = '';
  modelo = '';
  valor = undefined;
  imagem;
  user: any;
  funcionario = localStorage.getItem('FUNCIONARIO')

  list = [];

  imageURL;
  teste;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }
  ngOnInit() {
    this.display();
    this.usuarioService.checarCarro()
      .then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          if (resultado[i].nome && resultado[i].marca &&
            resultado[i].modelo && resultado[i].valor && resultado[i].imagem) {
            this.nome = resultado[i].nome;
          }
          let a = {
            nome: resultado[i].nome,
            placa: resultado[i].placa,
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
      this.lista2 = this.list
  }

  lista2 = [];
  filtro1 = "";
  
  filtro(){
    this.list = this.lista2
    this.list = this.list.filter(element => element.nome.toLowerCase().toString().startsWith(this.filtro1));
  }

  cadastrarCarro() {
    this.router.navigate(['/cadastrarCarro'])
  }

  editarCarro(index) {
    this.router.navigate(['/editarCarro', index])
  }

  display() {
    if(localStorage.getItem('NOME') == null){
      this.user = localStorage.getItem('USER')
    } else {
      this.user = localStorage.getItem('NOME')
    }
  }

  home() {
    document.location.reload();
  }

  logar() {
    this.router.navigate(['/login'])
  }

  detalhes(index) {
    this.router.navigate(['/produto', index])
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

  sair() {
    localStorage.removeItem("NOME")
    localStorage.removeItem("SENHA")
    localStorage.removeItem("FUNCIONARIO")
    localStorage.removeItem("ID")
    localStorage.removeItem("USER")
    document.location.reload();
  }
}
