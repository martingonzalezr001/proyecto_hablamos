//----> Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//----> Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ConectarComponent } from './conectar/conectar.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NotificationSuccessComponent } from './extra-components/notification-success/notification-success.component';
import { LoginServiceService } from './services/login-service.service';
import { NotificationErrorComponent } from './extra-components/notification-error/notification-error.component';
import { ModalTlfComponent } from './extra-components/modal-tlf/modal-tlf.component';
import { HorarioEditComponent } from './horario-edit/horario-edit.component';
import { ElegirHoraComponent } from './elegir-hora/elegir-hora.component';
import { ElegirDiaComponent } from './elegir-dia/elegir-dia.component';
import { ModalDeleteAccountComponent } from './modal-delete-account/modal-delete-account.component';
import { CookieService } from 'ngx-cookie-service';
import { UserServiceService } from './services/user-service.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'conectar', component: ConectarComponent},
  { path: 'lista-usuarios', component: ListaUsuariosComponent},
  { path: 'recuperar-password', component: RecuperarPasswordComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ConectarComponent,
    ListaUsuariosComponent,
    RecuperarPasswordComponent,
    NotificationSuccessComponent,
    NotificationErrorComponent,
    ModalTlfComponent,
    HorarioEditComponent,
    ElegirHoraComponent,
    ElegirDiaComponent,
    ModalDeleteAccountComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    


  ],
  providers: [LoginServiceService, UserServiceService,  CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
