import { Component, Inject, OnInit } from '@angular/core';

// Forms
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';

// Interfaces
import { Client } from 'src/app/data/models/response/clients/clients';

// Constants
import { PLUS, SPACE } from 'src/app/portal/utils/appConstants';
import * as TextES from '../../../utils/textConstantsES';

// Service
import { ClientesApiService } from 'src/app/data/network/clientes/clientes-api.service';
import { NewProject, ObjectNewProject } from 'src/app/data/models/request/projects/projectsRequest';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service'
import { ProjectListServiceService } from 'src/app/data/network/project-list-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectDetail } from 'src/app/data/models/response/projects/projects';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog-add-project',
  templateUrl: './dialog-add-project.component.html',
  styleUrls: ['./dialog-add-project.component.scss']
})
export class DialogAddProjectComponent implements OnInit {
  // Texts
  public textES = TextES.DIALOG_PROJECTS;
  public textButtons = TextES.BUTTONS;
  public textError = TextES.ERROR_MESSAGES;
  public textAddButton: string;

  // Lista
  public clientsList: Client[];
  public addProjectList = [];
  private responseList = [];

  // Form
  public addProjectForm: FormGroup;
  public selectedClient: AbstractControl;
  public projectName: AbstractControl;

  // Flags
  public flagLengthList = false;
  public flagActiveSendProjects = true;

  private count = 0;

  constructor(
    private clientApi: ClientesApiService,
    private utilities: GeneralFunctionsService,
    private formBuilder: FormBuilder,
    private projectService: ProjectListServiceService,
    private dialog: MatDialogRef<DialogAddProjectComponent>,
    @Inject(MAT_DIALOG_DATA) private dataReceived: any
  ) {
    this.textAddButton = PLUS + SPACE + this.textButtons.ADD_MORE;
    this.addProjectForm = this.formBuilder.group(
      {
        selectedClient: ['', Validators.required],
        projectName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ñÑ]{1,30}')])]
      }
    );

    this.selectedClient = this.addProjectForm.controls.selectedClient;
    this.projectName = this.addProjectForm.controls.projectName;    
  }

  ngOnInit(): void {
    this.getClientsList();
  }

  private getClientsList() {
    this.clientApi.getClientsListApi().subscribe((data: HttpResponse<Client[]>) => {
      this.clientsList = data.body;
    }, errorResponse => {
    });
  }

  public addNewProject() {
    this.count++;
    if(this.count > 0 && this.count <= 5) {
      const newProject: ObjectNewProject = {
        clientId: this.selectedClient.value.id,
        clientName: this.selectedClient.value.name,
        newProject: {
          key: this.utilities.generateProjectKey(this.projectName.value),
          name: this.projectName.value,
          description: this.selectedClient.value.name + SPACE + this.projectName.value,
        }
      };
  
      this.addProjectList.push(newProject);
      this.addProjectForm.reset();
      this.flagLengthList = false;
      this.flagActiveSendProjects = false;
    } else {
      this.flagLengthList = true;
      this.utilities.onAlertMessage(this.textError.PROJECT_LIST_COMPLETE, this.textButtons.OK)  ;
    }
  }

  public createNewProjects() {
    this.addProjectList.forEach((item: ObjectNewProject, position: number, array: ObjectNewProject[]) => {
      this.projectService.postCreateProject(item.clientId, item.newProject).subscribe((data: ProjectDetail) => {
        try {
          this.responseList.push(data);
        } catch(err) {
        }
      }, errorResponse => {
      });
    }); 
    this.dialog.close(this.responseList);
  }
}
