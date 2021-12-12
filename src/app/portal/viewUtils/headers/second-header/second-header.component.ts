import { Component, Input, OnInit } from '@angular/core';

// Importaciones de formulario
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

// Importación de constantes
import * as TextsES from '../../../utils/textConstantsES';

// Importación interfaces
import { ProjectDetail } from 'src/app/data/models/response/projects/projects';

// Importación de servicios
import { ProjectListServiceService } from 'src/app/data/network/project-list-service.service';
import { SecondHeaderModel } from 'src/app/data/models/local/inputsModels';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.scss']
})
export class SecondHeaderComponent implements OnInit {
  @Input() dataHeaderInput: SecondHeaderModel;

  // Form
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl;

  constructor( private formBuilder: FormBuilder, private projectService: ProjectListServiceService ) { 
    this.searchGroupForm = formBuilder.group({
      searchInput: ['', Validators.required]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
  }

  ngOnInit(): void {
  }

  public searchValue() {
    console.log('Contenido del controlador del input', this.searchInput);
  }

  private getProjectDetail(clientId: string, id: string, position: number) {
    this.projectService.getProjectDetail(clientId, id).subscribe((data: ProjectDetail) => {
      try {
        
      } catch(err) {
      }
    }, errorResponse => {
      
    });
  }

}
