import { ModalComponent } from './../modal/modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Usuario } from './../model/usuario';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-novos-usuarios',
  templateUrl: './novos-usuarios.component.html',
  styleUrls: ['./novos-usuarios.component.css']
})
export class NovosUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  novoUsuario = new Usuario();
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.usuarios = [
      {
        nome: 'admin',
        email: 'admin',
        permissao: 'administrador',
        senha: 'admin',
      }
    ]
  }
  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  adicionarUsuario() {
    this.usuarios.push(this.novoUsuario);
    this.modalRef.hide();
  }

}
