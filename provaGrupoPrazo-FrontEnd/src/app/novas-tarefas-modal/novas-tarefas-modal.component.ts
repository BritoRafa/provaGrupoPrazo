import { TarefasService } from './../services/tarefas.service';
import { Tarefa } from './../model/tarefa';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novas-tarefas-modal',
  templateUrl: './novas-tarefas-modal.component.html',
  styleUrls: ['./novas-tarefas-modal.component.css']
})
export class NovasTarefasModalComponent implements OnInit {
  novaTarefa = new Tarefa();
  constructor(public modalRef: BsModalRef,
              private tarefasService: TarefasService) { }

  ngOnInit() {
  }
  adicionarTarefa() {
    this.tarefasService.adicionarTarefa(this.novaTarefa).subscribe();
  }
}
