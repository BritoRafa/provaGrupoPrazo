import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { NovosUsuariosComponent } from './novos-usuarios/novos-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    NovosUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
