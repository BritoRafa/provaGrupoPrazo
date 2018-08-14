import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Usuario } from '../model/usuario';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NovosUsuariosModalComponent } from '../novos-usuarios-modal/novos-usuarios-modal.component';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-novos-usuarios',
  templateUrl: './novos-usuarios.component.html',
  styleUrls: ['./novos-usuarios.component.css']
})
export class NovosUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregarUsuarios();
  }
  carregarUsuarios() {
    this.usuarioService.carregarUsuarios().subscribe( result => {
      this.usuarios = result as Usuario[];
    });
  }
  adicionarUsuario() {
    this.modalRef = this.modalService.show(NovosUsuariosModalComponent);
    this.modalRef.content.onClose.subscribe( result => {
      this.carregarUsuarios();
    });
  }
  editarUsuario(usuario: Usuario) {
    this.modalRef = this.modalService.show(NovosUsuariosModalComponent, {
      initialState: {
        novoUsuario: usuario,
        editando: true
      }
    });
    this.modalRef.content.onClose.subscribe( result => {
      this.carregarUsuarios();
    });
  }
  excluirUsuario(id: number) {
    this.modalRef = this.modalService.show(ConfirmationModalComponent);
    this.modalRef.content.onClose.subscribe(result => {
      if (result === true) {
        this.usuarioService.excluirUsuario(id).subscribe(result => {
            this.carregarUsuarios();
          });
      }
  });

  }

}
