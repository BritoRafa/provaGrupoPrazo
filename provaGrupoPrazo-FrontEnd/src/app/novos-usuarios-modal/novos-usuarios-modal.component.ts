import { UsuarioService } from './../services/usuario.service';
import { Subject } from 'rxjs';
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
  editando: boolean;
  public onClose: Subject<boolean>;

  constructor(public modalRef: BsModalRef,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.onClose = new Subject();
  }
  adicionarUsuario() {
    this.usuarioService.adicionarUsuario(this.novoUsuario).subscribe( result => {
      this.onClose.next(true);
      this.modalRef.hide();
    });
  }
  editarUsuario() {
    this.usuarioService.editarUsuario(this.novoUsuario).subscribe( result => {
      this.onClose.next(true);
      this.modalRef.hide();
    })
  }
}
