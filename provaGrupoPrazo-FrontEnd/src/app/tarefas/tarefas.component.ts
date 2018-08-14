import { TarefasService } from './../services/tarefas.service';
import { NovasTarefasModalComponent } from './../novas-tarefas-modal/novas-tarefas-modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Tarefa } from './../model/tarefa';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  tarefas: Tarefa[];
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private tarefasService: TarefasService) { }

  ngOnInit() {
    this.carregarTarefas();
  }
  carregarTarefas() {
    this.tarefasService.carregarTarefas().subscribe(result => {
      this.tarefas = result as Tarefa[];
    });
  }
  adicionarTarefa() {
    this.modalRef = this.modalService.show(NovasTarefasModalComponent);
    this.modalRef.content.onClose.subscribe( result => {
      this.carregarTarefas();
    })
  }
  editarTarefa(tarefa: Tarefa) {
    this.modalRef = this.modalService.show(NovasTarefasModalComponent, {
      initialState: {
        novaTarefa: tarefa,
        editando: true
      }
    });
    this.modalRef.content.onClose.subscribe( result => {
      this.carregarTarefas();
    });
  }
  excluirTarefa(id: number) {
    this.modalRef = this.modalService.show(ConfirmationModalComponent);
    this.modalRef.content.onClose.subscribe(result => {
      if (result === true) {
          this.tarefasService.excluirTarefa(id).subscribe(result => {
            this.carregarTarefas();
          });
      }
  });
  }

}
