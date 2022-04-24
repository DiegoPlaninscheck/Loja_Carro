import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  listCar = [];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService.fornecedor()
    .then((resultado: any) => {
      resultado.find(valor => {
       let car = {
          nome: valor.NOME,
          email: valor.EMAIL, 
          telefone: valor.TELEFONE,
          imagem: valor.IMAGEM
        }
        this.listCar.push(car);
      })
    })
  }

  voltar() {
    this.router.navigate([''])
  }

}
