import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Internet Connections
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Angular material
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';


/* Importacion de elementos para Form */
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// Social login
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

// Components
import { LoginComponent } from './portal/ui/access/login/login.component';
import { PrincipalComponent } from './portal/ui/dashboard/principal/principal.component';
import { ProyectosComponent } from './portal/ui/dashboard/proyectos/proyectos.component';
import { EquiposComponent } from './portal/ui/dashboard/equipos/equipos.component';
import { ActividadesComponent } from './portal/ui/dashboard/actividades/actividades.component';
import { ClientesComponent } from './portal/ui/dashboard/clientes/clientes.component';
import { NoticiasComponent } from './portal/ui/dashboard/noticias/noticias.component';
import { NotificacionesComponent } from './portal/ui/dashboard/notificaciones/notificaciones.component';
import { UsuariosComponent } from './portal/ui/dashboard/usuarios/usuarios.component';
import { DetallesProyectoComponent } from './portal/ui/dashboard/proyectos/detalles-proyecto/detalles-proyecto.component';
import { DialogAddProjectComponent } from './portal/viewUtils/dialog/dialog-add-project/dialog-add-project.component';
import { GeneralTableComponent } from './portal/viewUtils/table/general-table/general-table.component';
import { SimpleTableComponent } from './portal/viewUtils/table/simple-table/simple-table.component';
import { GeneralHeaderComponent } from './portal/viewUtils/headers/general-header/general-header.component';
import { DialogAddTeamComponent } from './portal/viewUtils/dialog/dialog-add-team/dialog-add-team.component';
import { ActivasComponent } from './portal/ui/dashboard/noticias/activas/activas.component';
import { BorradoresComponent } from './portal/ui/dashboard/noticias/borradores/borradores.component';
import { SuspendidasComponent } from './portal/ui/dashboard/noticias/suspendidas/suspendidas.component';
import { DialogAddClientComponent } from './portal/viewUtils/dialog/dialog-add-client/dialog-add-client.component';
import { DialogAddNotificationComponent } from './portal/viewUtils/dialog/dialog-add-notification/dialog-add-notification.component';
import { DialogAddNewsComponent } from './portal/viewUtils/dialog/dialog-add-news/dialog-add-news.component';
import { DragAndDropZoneDirective } from './portal/viewUtils/directivas/drag-and-drop-zone.directive';
import { SecondHeaderComponent } from './portal/viewUtils/headers/second-header/second-header.component';
import { ProyectosPrincipalComponent } from './portal/ui/dashboard/proyectos/proyectos-principal/proyectos-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ProyectosComponent,
    EquiposComponent,
    ActividadesComponent,
    ClientesComponent,
    NoticiasComponent,
    NotificacionesComponent,
    UsuariosComponent,
    DetallesProyectoComponent,
    DialogAddProjectComponent,
    GeneralTableComponent,
    SimpleTableComponent,
    GeneralHeaderComponent,
    DialogAddTeamComponent,
    ActivasComponent,
    BorradoresComponent,
    SuspendidasComponent,
    DialogAddClientComponent,
    DialogAddNotificationComponent,
    DialogAddNewsComponent,
    DragAndDropZoneDirective,
    SecondHeaderComponent,
    ProyectosPrincipalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SocialLoginModule,
    MatGridListModule
  ],
  entryComponents: [
    DialogAddProjectComponent
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '100113038197-6igeai7v21jecg5nna3h7k4gccjsqf1i.apps.googleusercontent.com'
            )
          },
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
