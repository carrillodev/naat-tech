import { Component, OnInit } from '@angular/core';

// Importaciones de form
import {
  FormBuilder,
  Validators,
  AbstractControl,
  FormGroup,
} from '@angular/forms';

// Modelos
import { NewClient } from 'src/app/data/models/request/clients/clientesRequest';

// Importación de constantes y utilidades
import { SPACE, PLUS } from 'src/app/portal/utils/appConstants';
import { DIALOG_CLIENT, BUTTONS, ERROR_MESSAGES } from 'src/app/portal/utils/textConstantsES';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';

// Importación de servicios
import { ClientesApiService } from 'src/app/data/network/clientes/clientes-api.service';

// Importaciones de angular material
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-client',
  templateUrl: './dialog-add-client.component.html',
  styleUrls: ['./dialog-add-client.component.scss'],
})
export class DialogAddClientComponent implements OnInit {
  // Textos
  public textES = DIALOG_CLIENT;
  public textButtons = BUTTONS;
  public textError = ERROR_MESSAGES;

  // Formulario
  public addForm: FormGroup;
  public clientName: AbstractControl;

  // List
  public addList: NewClient[] = [];

  public textAddButton: string;

  constructor(
    private api: ClientesApiService,
    private utilities: GeneralFunctionsService,
    private dialog: MatDialogRef<DialogAddClientComponent>,
    private formBuilder: FormBuilder
  ) {
    // Construcción de formulario
    this.addForm = formBuilder.group({
      clientName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-z A-Z]{1,50}'),
        ]),
      ],
    });

    this.clientName = this.addForm.controls.clientName;

    this.textAddButton = PLUS + SPACE + this.textButtons.ADD_MORE;
  }

  ngOnInit(): void {}

  public addNew() {
    const newItem: NewClient = {
      key: this.utilities.generateProjectKey(this.clientName.value),
      name: this.clientName.value,
      description: this.clientName.value + SPACE + this.utilities.generateProjectKey(this.clientName.value),
    };

    this.addList.push(newItem);
  }

  public createNewItem(): void {
    this.addList.forEach((item: NewClient) => {
      this.postCreateNewClient(item);
    });

    this.dialog.close(false);
  }
  
  private postCreateNewClient(item: NewClient): void {
    this.api.postCreateClientApi(item).subscribe((dataResponse) => {
      try {
        // 
      }catch(err) {}
    }, errorResponse => {}
    );
  }
}
