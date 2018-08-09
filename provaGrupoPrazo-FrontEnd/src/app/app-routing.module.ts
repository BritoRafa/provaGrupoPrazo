import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovosUsuariosComponent } from './novos-usuarios/novos-usuarios.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
  {path: 'novos-usuarios', component: NovosUsuariosComponent},
  {path: 'tarefas', component: TarefasComponent},
  {path: ' ', redirectTo: 'tarefas'},
  {path: '**', redirectTo: 'tarefas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
