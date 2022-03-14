import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "./services/usuario.service";

@Injectable()
class CheckLogged implements CanActivate {
    constructor(
        private router: Router,
        private usuarioService: UsuarioService
    ) { }

    user = '';
    password = '';
    retorno = false;

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log("Dentro")

        let nome = localStorage.getItem("USER")
        let senha = localStorage.getItem('PASSWORD') 

        this.usuarioService.checarPessoa()
            .then((resultado: any) => {
                for (let i = 0; i < resultado.length; i++) {
                    if (this.user === resultado[i].nome && this.password === resultado[i].senha) {
                       this.user = resultado[i].nome
                       this.password = resultado[i].senha
                    } 
                }
                return false;
            }).catch(erro => {
                console.log("ERRO AO BUSCAR USUÁRIO:", erro)
            })

            if(this.user === nome && this.password === senha){
                return true;
                this.router.navigate(['']);
            } else{
                alert("ERRO!")
                this.router.navigate(['/login'])
            }
       

        // if(user || password){
        //     console.log(user)
        //     return true;
        // }else{
        //     alert('Usuário não cadastrado')
        //     this.router.navigate(['/login'])
        //     return false;
        // }
    }
}

export default CheckLogged;
