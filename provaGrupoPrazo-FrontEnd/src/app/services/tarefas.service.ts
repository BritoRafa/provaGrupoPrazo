import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Tarefa } from '../model/tarefa';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http: HttpClient) { }

  public carregarTarefas() {
    return this.http.get(environment.webApiBaseUrl + 'api/Tarefas');
  }
  public adicionarTarefa(tarefa: Tarefa) {
    return this.http.post(environment.webApiBaseUrl + 'api/Tarefas', tarefa);
  }
  public editarTarefa(tarefa: Tarefa) {
    return this.http.put(environment.webApiBaseUrl + 'api/Tarefas', tarefa);
  }
  public excluirTarefa(id: number) {
    return this.http.delete(environment.webApiBaseUrl + 'api/Tarefas/' + id);
  }
}
