import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarMenu: boolean = false;
  permissaoUsuarioLogado: string;
  nomeUsuarioLogado: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.mostrarPanelEmitter.subscribe(result => this.mostrarMenu = result)
    this.authService.userNameEmitter.subscribe(result => this.nomeUsuarioLogado = result);
    this.authService.userRoleEmitter.subscribe(result => this.permissaoUsuarioLogado = result);
    this.authService.usuarioEstaAutenticado();
    // this.mostrarMenu = JSON.parse(localStorage.getItem("isLoggedin"));
  }
  logout() {
    this.authService.logout();
  }

}
