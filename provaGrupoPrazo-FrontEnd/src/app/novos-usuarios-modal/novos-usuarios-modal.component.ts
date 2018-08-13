import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Usuario } from './../model/usuario';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-novos-usuarios-modal',
  templateUrl: './novos-usuarios-modal.component.html',
  styleUrls: ['./novos-usuarios-modal.component.css']
})
export class NovosUsuariosModalComponent implements OnInit {
  novoUsuario = new Usuario();

  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
  }
  adicionarUsuario() {
    this.modalRef.hide();
  }
}
