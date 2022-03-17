import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "./services/usuario.service";

@Injectable()
class CheckLogged implements CanActivate {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  user = "";
  password = "";
  retorno = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("Dentro");

    this.user = localStorage.getItem("NOME");
    this.password = localStorage.getItem("SENHA");

    return true;
  }
}

export default CheckLogged;
