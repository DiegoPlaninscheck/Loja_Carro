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
  id;
  password = "";
  retorno = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if(localStorage.getItem("NOME") == null){
      this.user = localStorage.getItem("USER");
    } else{
      this.user = localStorage.getItem("NOME");
    }
    this.password = localStorage.getItem("SENHA");

    if((this.user && this.password) || this.user) {
      return true;
    } else {
      alert("É preciso estar logado!")
      this.router.navigate(['/login'])
      return false;
    }
    
  }
}

export default CheckLogged;
