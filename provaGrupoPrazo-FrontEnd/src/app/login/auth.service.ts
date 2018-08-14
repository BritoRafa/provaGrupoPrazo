import { Injectable, EventEmitter } from "@angular/core";
import { Usuario } from "../model/usuario";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarPanelEmitter = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === "administrador" && usuario.senha === "admin") {
      this.usuarioAutenticado = true;
      this.mostrarPanelEmitter.emit(true);
      this.router.navigate(["/"]);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarPanelEmitter.emit(false);
    }
  }
  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
