import { Component, OnInit } from '@angular/core';

/* Importaciones de formularios */
import { Validators, FormBuilder, FormGroup, AbstractControl, FormControl } from '@angular/forms';

/* Models */
import { StructDataTableModel } from 'src/app/data/models/local/TableModels';

/* RxJS */
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/* Importación de constantes, utlidades */
import { DIALOG_WORK_TEAMS, ERROR_MESSAGES, BUTTONS } from 'src/app/portal/utils/textConstantsES';

/* Importacion de mocks */
import { COLLABORATORS_LIST_MOCK } from 'src/app/data/models/local/GeneralMocks';
import { LIST_WORK_TEAMS } from 'src/app/portal/utils/appConstants';

// Importaciones de angular material
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-team',
  templateUrl: './dialog-add-team.component.html',
  styleUrls: ['./dialog-add-team.component.scss']
})
export class DialogAddTeamComponent implements OnInit {

  // Textos
  public textES = DIALOG_WORK_TEAMS;
  public txtError = ERROR_MESSAGES;
  public textButtons = BUTTONS;

  // Form
  public addForm: FormGroup;
  public area: AbstractControl;
  public emailLead: AbstractControl;
  public activities: AbstractControl;

  // Autocomplete
  public collaboratorsAutoComplete = new FormControl();
  public filteredList: Observable<string[]>;

  // List
  public addedCollaborator: string[];
  public addedActivities: string[];

  // Table
  private dataTableLocal: StructDataTableModel;

  constructor( private fromBuild: FormBuilder, private dialog: MatDialogRef<DialogAddTeamComponent> ) {

    // Construccion del formulario
    this.addForm = this.fromBuild.group({
      area: ['', Validators.compose( [ Validators.required, Validators.pattern('[a-z A-Z Ññ]{3,30}') ] ) ],
      emailLead: ['', Validators.compose( [ Validators.required, Validators.email ] ) ],
      activities: ['', Validators.compose( [
        Validators.required, Validators.pattern('[a-z A-Z Ññ]{3,30}')
      ] ) ],
    });

    this.area = this.addForm.controls.area;
    this.emailLead = this.addForm.controls.emailLead;
    this.activities = this.addForm.controls.activities;
  }

  ngOnInit(): void {
    this.addedCollaborator = [];
    this.addedActivities = [];

    this.filteredList = this.collaboratorsAutoComplete.valueChanges.pipe(
      startWith(''),
      map( value => this.filter(value) )
    );

  }


  /**
   * @description Método que nos ayuda a filtrar el contenido de una lista. Es usado para el AutoComplete.
   * @param collaborator (string) Valor que se usa para buscar dentro de la lista.
   * @returns (string[]) lista filtrada.
   */
  private filter(collaborator: string): string[] {
    const value = collaborator.toLowerCase();

    return COLLABORATORS_LIST_MOCK.filter( filterOption => filterOption.toLowerCase().includes(value) );
  }


  /**
   * @description Método encaragdo de agregar un colaborador a la lista.
   */
  public addCollaborator(): void {
    this.addedCollaborator.push(this.collaboratorsAutoComplete.value);
  }


  /**
   * @description Método encaragdo de agregar una actividad a la lista.
   */
  public addActivity(): void {
    this.addedActivities.push(this.activities.value);
  }


  /**
   * @description Método para la eliminación de elementos de nuestra lista.
   * @param position (number) Posición del elemento a eliminar.
   */
  public removeCollaborator(position: number): void {
    if ( this.addedCollaborator.length > 1 ) {
      this.addedCollaborator.splice(position, 1);
    } else {
      this.addedCollaborator = [];
    }
  }


  /**
   * @description Método para la eliminación de elementos de nuestra lista.
   * @param position (number) Posición del elemento a eliminar.
   */
  public removeActivity(position: number): void {
    if ( this.addedActivities.length > 1 ) {
      this.addedActivities.splice(position, 1);
    } else {
      this.addedActivities = [];
    }
  }

  /**
   * @description Método encargado de agregar datos a nuestra lista de equipos de trabajo
   */
  public addValues(): void {
    const valuesList = localStorage.getItem(LIST_WORK_TEAMS) === null ? [] : JSON.parse(localStorage.getItem(LIST_WORK_TEAMS));

    this.dataTableLocal = {
      COLUMN_ONE: this.area.value,
      COLUMN_TWO: this.emailLead.value,
      COLUMN_THREE: this.addedCollaborator.length.toString(),
      COLUMN_FOUR: this.addedActivities.length.toString(),
      COLUMN_FIVE: this.textButtons.VIEW
    };

    valuesList.push(this.dataTableLocal);
    localStorage.setItem(LIST_WORK_TEAMS, JSON.stringify(valuesList));
    this.dialog.close();
  }

}