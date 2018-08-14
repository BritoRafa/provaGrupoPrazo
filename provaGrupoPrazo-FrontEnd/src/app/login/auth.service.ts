import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from "@angular/core";
import { Usuario } from "../model/usuario";
import { Router } from "@angular/router";
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarPanelEmitter = new Subject<boolean>();
  userNameEmitter = new Subject<string>();
  userRoleEmitter = new Subject<string>();
  constructor(private router: Router,
              private http: HttpClient) {}

  fazerLogin(usuario: Usuario) {
    return this.http.post(environment.webApiBaseUrl + 'api/Login/login', usuario)
    .subscribe( response => {
      console.log(response);
      let token = (<any>response).token;
      let userName = (<any>response).userName;
      let userRole = (<any>response).userRole;
      localStorage.setItem("jwt", token);
      localStorage.setItem("userName", userName);
      localStorage.setItem("userRole", userRole);
      this.usuarioAutenticado = true;
      this.mostrarPanelEmitter.next(true);
      this.userNameEmitter.next(userName);
      this.userRoleEmitter.next(userRole);
      this.router.navigate(["/"]);
    },
    error => {
      this.usuarioAutenticado = false;
      this.mostrarPanelEmitter.next(false);

    });

  }
  usuarioEstaAutenticado() {
    let token = localStorage.getItem("jwt");
    let userName = localStorage.getItem("userName");
    let userRole = localStorage.getItem("userRole");
    if(token){
      this.mostrarPanelEmitter.next(true);
      this.userNameEmitter.next(userName);
      this.userRoleEmitter.next(userRole);
    }
    else{
      this.mostrarPanelEmitter.next(false);
    }
  }
  logout() {
    localStorage.clear();
    this.mostrarPanelEmitter.next(false);
    this.router.navigate(["/login"]);
  }
}
