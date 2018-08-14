import { Subject } from 'rxjs';
import { TarefasService } from '../services/tarefas.service';
import { Tarefa } from '../model/tarefa';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novas-tarefas-modal',
  templateUrl: './novas-tarefas-modal.component.html',
  styleUrls: ['./novas-tarefas-modal.component.css']
})
export class NovasTarefasModalComponent implements OnInit {
  novaTarefa = new Tarefa();
  editando: boolean;
  public onClose: Subject<boolean>;
  constructor(public modalRef: BsModalRef,
              private tarefasService: TarefasService) { }

  ngOnInit() {
    this.onClose = new Subject();
  }
  adicionarTarefa() {
    this.novaTarefa.concluida = false;
    this.tarefasService.adicionarTarefa(this.novaTarefa).subscribe( result => {
      this.onClose.next(true);
      this.modalRef.hide();
    });
  }
  editarTarefa () {
    this.tarefasService.editarTarefa(this.novaTarefa).subscribe( result => {
      this.onClose.next(true);
      this.modalRef.hide();
    });
  }
}
