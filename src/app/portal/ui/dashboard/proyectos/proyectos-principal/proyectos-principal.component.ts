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
import * as TextsES from '../../../../utils/textConstantsES';
import * as AppConstants from '../../../../utils/appConstants';

// Dialogs
import { DialogAddProjectComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-project/dialog-add-project.component';

// Angular material
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-proyectos-principal',
  templateUrl: './proyectos-principal.component.html',
  styleUrls: ['./proyectos-principal.component.scss']
})
export class ProyectosPrincipalComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Listas para el table
  public projectsList: ProjectsList[] = [];
  public headersList: string[];

  // Textos
  public textES = TextsES.PROJECTS;
  public buttonTexts = TextsES.BUTTONS;
  private statusTexts = TextsES.STATUS;
  private labelTexts = TextsES.INPUTS;
  public searchLabel: string;

  // Form
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl;

  // Table
  public lengthDataTable: number;
  private pageTable = 0;
  public pageSize = 10;

  public activeSpinner = true;

  constructor(
    private projectService: ProjectListServiceService,
    private formBuilder: FormBuilder,
    private dialogController: MatDialog
  ) {
    this.headersList = this.textES.TABLE_HEADERS;
    this.searchLabel = this.labelTexts.SEARCH + ' ' + this.labelTexts.SEARCH_PROJECT;

    this.searchGroupForm = formBuilder.group({
      searchInput: ['', Validators.required]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
  }

  ngOnInit(): void {
    // this.paginator._intl.itemsPerPageLabel = 'Proyectos por página'
    // this.paginator.firstPage();
    this.getProjectsList('fe3f7dbf-7515-45c2-9d31-f8a7658cdb16', this.pageTable, '');
  }

  public changePageTable(event: any) {
    this.pageTable = event.pageIndex;
    this.pageSize = event.pageSize;
    this.projectsList = [];
    this.getProjectsList('fe3f7dbf-7515-45c2-9d31-f8a7658cdb16', this.pageTable, '');
  }

  private getProjectsList(clientID: string, page: number, name: string) {
    const paramsRequest = new HttpParams()
    .set('page', page.toString())
    .set('size', this.pageSize.toString())
    .set('name', name);

    this.projectService.getProjectsList(clientID, paramsRequest).subscribe((data) => {
      try {
        this.projectsList = data.body as ProjectsList[];
        this.lengthDataTable = parseInt(data.headers.get('Total-Elements'), 10);
        this.projectsList.forEach((item: ProjectsList, position: number, array: ProjectsList[]) => {
          this.getProjectDetail(clientID, item.id, position)
        });
        this.activeSpinner = false;
      } catch (err) {
        this.activeSpinner = false;
      }
    }, errorResponse => {
      this.activeSpinner = false;
    });
  }

  private getProjectDetail(clientId: string, id: string, position: number) {
    this.projectService.getProjectDetail(clientId, id).subscribe((data: ProjectDetail) => {
      try {
        this.projectsList[position].detail = data;
        this.projectsList[position].enabled = data.enabled;
        if (data.enabled) {
          this.projectsList[position].status = this.statusTexts.ACTIVE;
          this.projectsList[position].action = this.buttonTexts.ACTIONS_INACTIVE;
        } else {
          this.projectsList[position].status = this.statusTexts.INACTIVE;
          this.projectsList[position].action = this.buttonTexts.ACTIONS_ACTIVE;
        }
      } catch (err) {
      }
    }, errorResponse => {
    });
  }

  public changeStatusColor(status: boolean) {
    return status ? { 'status-active': true } : { 'status-inactive': true };
  }

  public changeStatus(item: ProjectsList) {
    const bodyService: UpdateProjectDetail = {
      key: item.key,
      name: item.name,
      description: item.description,
      enabled: !item.enabled,
    };
    this.projectService.putProjectDetail(AppConstants.CLIENT_ID, item.id, bodyService).subscribe((data: ProjectDetail) => {
      this.getProjectsList(AppConstants.CLIENT_ID, this.pageTable, '');
    });
  }

  public openDialog() {
    const openDialog = this.dialogController.open(
      DialogAddProjectComponent, {
        disableClose: true,
        width: '635px',
        data: 'Hola'
      }
    );

    openDialog.afterClosed().subscribe((result: ProjectDetail[]) => {      
      this.getProjectsList('fe3f7dbf-7515-45c2-9d31-f8a7658cdb16', this.pageTable, '');
    });
  }

  public searchValueEnter(): void {
    this.getProjectsList('fe3f7dbf-7515-45c2-9d31-f8a7658cdb16', 0, this.searchInput.value)
  }
}
