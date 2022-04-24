import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

id_endereco
pais;
estado; 
cidade; 
cep;
pais2;
estado2; 
cidade2; 
cep2;


  constructor(
    private router: Router,
     private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService.listarPessoas()
    .then((resultadoPessoa: any) => {
      resultadoPessoa.find(pessoa => {
        if(pessoa.ID == localStorage.getItem('ID')){
          this.usuarioService.checarEndereco()
          .then((resultadoEndereco: any) => {
            resultadoEndereco.find(endereco => {
              if(endereco.CODIGO == pessoa.ENDERECO_CODIGO){
                  this.pais = endereco.PAIS
                  this.estado = endereco.ESTADO
                  this.cidade = endereco.CIDADE
                  this.cep = endereco.CEP
                  this.pais2 = endereco.PAIS
                  this.estado2 = endereco.ESTADO
                  this.cidade2 = endereco.CIDADE
                  this.cep2 = endereco.CEP
                  this.id_endereco = endereco.CODIGO
              }
            })
          })
        }
      })
    })
  }

  editar(){
    if(this.pais != this.pais2 || this.estado != this.estado2 
      || this.cidade != this.cidade2 || this.cep != this.cep2){
        this.usuarioService.editarEndereco(this.id_endereco, this.pais, this.estado, this.cidade, this.cep)
    }
      this.usuarioService.deletarCarrinho(localStorage.getItem("ID"))
      alert("Compra realizada com sucesso!")
      this.router.navigate([""])
  }

}
