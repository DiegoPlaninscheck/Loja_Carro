import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"],
})
export class ProdutoComponent implements OnInit {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  id;
  nome;
  placa;
  marca;
  modelo;
  valor;
  imagem;
  id_cliente = localStorage.getItem("ID");

  ngOnInit() {
    if (this.router.url.length > 10) {
      this.id = this.router.url.substring(this.router.url.length - 2);
    } else {
      this.id = this.router.url.substring(this.router.url.length - 1);
    }
    this.usuarioService.checarCarro().then((resultado: any) => {
      resultado.find((valorCarro) => {
        if (this.id == valorCarro.id) {
          this.nome = valorCarro.nome;
          this.placa = valorCarro.placa;
          this.marca = valorCarro.marca;
          this.modelo = valorCarro.modelo;
          this.valor = valorCarro.valor;
          this.imagem = valorCarro.imagem;
        }
      });
    });

  }

  comprar() {
    if (localStorage.getItem("ID") == null) {
      alert("Anta você não está logado!")
      this.router.navigate(["/login"]);
    } else {
      this.usuarioService.comprar(localStorage.getItem("ID"), this.id);
      alert("Produto inserido no carrinho com sucesso!!!!");
      this.router.navigate([""]);
    }
  }

  voltar() {
    this.router.navigate([""]);
  }
}
