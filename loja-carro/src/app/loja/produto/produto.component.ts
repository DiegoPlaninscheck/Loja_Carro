import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private router: Router,
    private usuarioService: UsuarioService) { }

  id;
  nome;
  placa;
  marca;
  modelo;
  valor;
  imagem;
  id_cliente = localStorage.getItem('ID');
  

  ngOnInit() {
    this.id = this.router.url.substring(this.router.url.length - 1)
    this.usuarioService.checarCarro()
      .then((resultado: any) => {
        resultado.find(valorCarro => {
          if(valorCarro.id >= 10){
            this.id = this.router.url.substring(this.router.url.length - 2)
          }
          if (this.id == valorCarro.id) {
            this.nome = valorCarro.nome
            this.placa = valorCarro.placa
            this.marca = valorCarro.marca
            this.modelo = valorCarro.modelo
            this.valor = valorCarro.valor
            this.imagem = valorCarro.imagem
          }
        })
      })
  }

  comprar() {
    this.id = this.router.url.substring(this.router.url.length - 1)
    this.usuarioService.colocar_carrinho(1, this.id);
    this.usuarioService.colocar_comprador(1, this.id_cliente)
    this.router.navigate(['/carrinho'])

  }

  voltar() {
    this.router.navigate([''])
  }

}
