import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private router: Router) {}


  nome = 'Diego';
  valor = 50;

  ngOnInit() {
  }

  voltar() {
    this.router.navigate([''])
  }

}
