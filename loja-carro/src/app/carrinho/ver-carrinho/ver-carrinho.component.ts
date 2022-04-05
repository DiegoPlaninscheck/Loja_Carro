import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-ver-carrinho",
  templateUrl: "./ver-carrinho.component.html",
  styleUrls: ["./ver-carrinho.component.css"],
})
export class VerCarrinhoComponent implements OnInit {
  constructor(private router: Router,  private usuarioService: UsuarioService) {}

  user;
  listCar = [];  
  listClient = [];

  ngOnInit() {
    this.usuarioService.carrinho()
    .then((resultado: any) => {
      console.log(resultado)
      this.usuarioService.checarCarro()
      .then((resultado2: any) => {
        console.log(resultado2)
        resultado2.find(valorCarro => {
          if(valorCarro.id == resultado[0].ID_CARRO){
            let carro = {
              nome: valorCarro.nome, 
              valor: valorCarro.valor
            }
            this.listCar.push(carro)
          }
        })
      })
      this.usuarioService.cliente()
      .then((resultado3: any) => {
        console.log(resultado3)
      })
      // this.usuarioService.checarCliente()
      // .then((resultado3: any) =>{
      //   resultado3.find(valorCliente => {
      //     if(valorCliente.id == resultado3[0].ID){
      //       let cliente = {
      //         nome: valorCliente.nome, 
      //         sobrenome: valorCliente.sobrenome
      //       }
      //       this.listClient.push(cliente);
      //     }
      //   })
      // })
    }).catch(erro => {
      console.log(erro);
    })

    
  }

  entrar(){
     this.router.navigate(['/login']); 
  }

  voltar() {
    this.router.navigate([''])
  }

  finalizar(){
    this.router.navigate(['/pagamento'])
  }

}
