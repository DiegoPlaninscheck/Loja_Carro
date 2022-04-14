import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate([''])
  }

  login(){
    this.router.navigate(['/login'])
  }

  carrinho(){
    this.router.navigate(['/carrinho'])
  }

  fornecedor(){
    this.router.navigate(['/fornecedor'])
  }

  sair(){
    this.router.navigate([''])
    localStorage.removeItem('ID')
    localStorage.removeItem('NOME')
    localStorage.removeItem('SENHA')
    localStorage.removeItem('FUNCIONARIO')
  }

}
