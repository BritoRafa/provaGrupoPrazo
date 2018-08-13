import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Usuario } from './../model/usuario';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NovosUsuariosModalComponent } from '../novos-usuarios-modal/novos-usuarios-modal.component';

@Component({
  selector: 'app-novos-usuarios',
  templateUrl: './novos-usuarios.component.html',
  styleUrls: ['./novos-usuarios.component.css']
})
export class NovosUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.usuarios = [
      {
        id: 1,
        nome: 'admin',
        email: 'admin',
        permissao: 'administrador',
        senha: 'admin',
      }
    ]
  }
  abrirModal() {
    this.modalRef = this.modalService.show(NovosUsuariosModalComponent);
  }
  editarUsuario(usuario: Usuario) {
    this.modalRef = this.modalService.show(NovosUsuariosModalComponent, {
      initialState: {
        novoUsuario: usuario
      }
    });
  }

}
