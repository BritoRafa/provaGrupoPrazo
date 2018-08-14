import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { NovosUsuariosComponent } from './novos-usuarios/novos-usuarios.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { NovosUsuariosModalComponent } from './novos-usuarios-modal/novos-usuarios-modal.component';
import { NovasTarefasModalComponent } from './novas-tarefas-modal/novas-tarefas-modal.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { TarefasService } from './services/tarefas.service';
import { UsuarioService } from './services/usuario.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    NovosUsuariosComponent,
    NovosUsuariosModalComponent,
    NovasTarefasModalComponent,
    ConfirmationModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    TarefasService,
    UsuarioService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NovosUsuariosModalComponent,
    NovasTarefasModalComponent,
    ConfirmationModalComponent
  ]
})
export class AppModule { }
