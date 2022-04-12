import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-ver-carrinho",
  templateUrl: "./ver-carrinho.component.html",
  styleUrls: ["./ver-carrinho.component.css"],
})
export class VerCarrinhoComponent implements OnInit {
  constructor(private router: Router, private usuarioService: UsuarioService) {}


  listCar = [];

  ngOnInit() {
    this.usuarioService.listarCarrinho().then((resultadoCarrinho: any) => {
      resultadoCarrinho.find((carrinho) => {
        if (carrinho.ID_PESSOA == localStorage.getItem("ID")) {
          this.usuarioService.checarCarro().then((resultadoCarro: any) => {
            resultadoCarro.find((carro) => {
              if (carro.id == carrinho.ID_CARRO) {
                let car = {
                  nome: carro.nome,
                  valor: carro.valor, 
                  imagem: carro.imagem
                }
                this.listCar.push(car);
              }
            });
          });
        }
      });
    });
  }

  deletar(){
    this.usuarioService.deletarCarrinho(localStorage.getItem("ID"))
    alert("Exclusão concluida!")
    document.location.reload();
  }

  voltar() {
    this.router.navigate([""]);
  }

  finalizar() {
    if(this.listCar.length != 0) {
      this.router.navigate(["/pagamento"]);
    } else {
      alert("Não há nada para finalizar a compra")
    }
  }
}
