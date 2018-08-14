import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovosUsuariosComponent } from './novos-usuarios/novos-usuarios.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {path: 'novos-usuarios', component: NovosUsuariosComponent, canActivate: [AuthGuard]},
  {path: 'tarefas', component: TarefasComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: ' ', redirectTo: 'tarefas', canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'tarefas', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
