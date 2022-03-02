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

  cadastrar(){
    this.router.navigate(['/login'])
  }

  comprar(){
    this.router.navigate([''])
  }

  pagamento(){
    this.router.navigate(['/carrinho'])
  }

  parceria(){
    this.router.navigate(['/fornecedor'])
  }

}
