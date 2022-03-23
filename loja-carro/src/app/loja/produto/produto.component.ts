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
    private usuarioService: UsuarioService) {}

  id
  nome;
  marca;
  modelo;
  valor;
  imagem;

  ngOnInit() {
    this.id = this.router.url.substring(this.router.url.length - 1)
    this.usuarioService.checarCarro()
    .then((resultado: any) => {
      resultado.find(valorCarro => {
        console.log(valorCarro);
        if(this.id == valorCarro.id) {
          this.nome = valorCarro.nome
          this.marca = valorCarro.marca
          this.modelo = valorCarro.modelo
          this.valor = valorCarro.valor
          this.imagem = valorCarro.imagem
        }
      })
    })
  }

  comprar() {
    this.router.navigate(['/carrinho'])
  }

  voltar() {
    this.router.navigate([''])
  }

}
