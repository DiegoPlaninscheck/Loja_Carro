import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-loja',
  templateUrl: './gerenciar-loja.component.html',
  styleUrls: ['./gerenciar-loja.component.css']
})
export class GerenciarLojaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logar(){
    this.router.navigate(['/login'])
  }

  volta(){
    this.router.navigate([''])
  }

}
