import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { Alert } from "selenium-webdriver";
import { UsuarioService } from "./services/usuario.service";

@Injectable()
class CheckLogged_Carro implements CanActivate {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  user = "";
  password = "";
  funcionario;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    this.user = localStorage.getItem("NOME");
    this.password = localStorage.getItem("SENHA");
    this.funcionario = localStorage.getItem("FUNCIONARIO")

    if(this.user && this.password && this.funcionario == true) {
      return true;
    } else {
      alert("FUNÇÃO NÃO DISPONÍVEL");
      return false;
    }
    
  }
}

export default CheckLogged_Carro;
