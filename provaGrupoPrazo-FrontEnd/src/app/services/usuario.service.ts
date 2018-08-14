import { Usuario } from '../model/usuario';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  carregarUsuarios() {
    return this.http.get(environment.webApiBaseUrl + 'api/Usuario');
  }
  adicionarUsuario(usuario: Usuario) {
    return this.http.post(environment.webApiBaseUrl + 'api/Usuario', usuario);
  }
  editarUsuario(usuario: Usuario) {
    return this.http.put(environment.webApiBaseUrl + 'api/Usuario', usuario);
  }
  excluirUsuario(id: number) {
    return this.http.delete(environment.webApiBaseUrl + 'api/Usuario/' + id);
  }
}
