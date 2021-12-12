import { Component, OnInit, ViewChild } from '@angular/core';

// Importaciones para consumo de servicios
import { HttpParams } from '@angular/common/http';

// Imoprtaciones de formulario
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

// Importación de servicios
import { ProjectListServiceService } from 'src/app/data/network/project-list-service.service';

// Importación interfaces
import { ProjectDetail, ProjectsList } from 'src/app/data/models/response/projects/projects';
import { UpdateProjectDetail } from 'src/app/data/models/request/projects/projectsRequest';

// Importación de constantes
import * as TextsES from '../../../utils/textConstantsES';
import * as AppConstants from '../../../utils/appConstants';

// Dialogs
import { DialogAddProjectComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-project/dialog-add-project.component';

// Angular material
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  constructor(

  ) {
    
  }

  ngOnInit(): void {
    
  }

}
