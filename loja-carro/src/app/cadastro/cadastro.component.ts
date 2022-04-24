import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../services/usuario.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  nome = "";
  sobrenome = "";
  senha = "";
  nascimento = "";
  email = "";
  pais = "";
  estado = "";
  cidade = "";
  cep = "";
  i = "";
  id_endereco;

  ngOnInit() {}

  cadastro() {
    this.usuarioService.checarEndereco().then((result: any) => {
      this.id_endereco = result.length;
      console.log(this.id_endereco);
    })
    if (this.nome && this.sobrenome && this.senha && this.email && this.pais && this.estado && this.cidade && this.cep) {
      this.usuarioService.endereco(this.pais, this.estado, this.cidade, this.cep);
      this.usuarioService.cadastrar( this.nome,this.senha,  this.sobrenome, this.nascimento,  this.email, parseInt(this.id_endereco));
      this.router.navigate(["/login"]);
    } else {
      alert("Preencha todos os dados!");
    }
  }
}
