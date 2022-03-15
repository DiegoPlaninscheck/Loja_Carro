import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-ver-carrinho",
  templateUrl: "./ver-carrinho.component.html",
  styleUrls: ["./ver-carrinho.component.css"],
})
export class VerCarrinhoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  entrar(){
     this.router.navigate(['/login']); 
  }
}
