import { Component, OnInit } from '@angular/core';

// Importaciones de http
import { HttpParams, HttpResponse } from '@angular/common/http';

// Models
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/tableModels';
import { Client } from 'src/app/data/models/response/clients/clients';

// Service
import { ClientesApiService } from 'src/app/data/network/clientes/clientes-api.service';

// Constanates & utils
import {CLIENTS, BUTTONS, INPUTS} from '../../../utils/textConstantsES';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';
import { DialogAddClientComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-client/dialog-add-client.component';
import { DIALOG_WIDTH_SM, DIALOG_WIDTH_XL } from 'src/app/portal/utils/appConstants';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  // Text
  public textEs = CLIENTS;
  private textPlaceholder = INPUTS;
  private textButton = BUTTONS;

  // Table
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  public activeSpinner = true;

  constructor(private dto: GeneralStructsService, private api: ClientesApiService, private utilities: GeneralFunctionsService) { 
    this.dataTableList = [];
    this.getClientList(0, 10);
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      CLIENTS.TITLE,
      INPUTS.SEARCH,
      BUTTONS.ADD_CLIENT,
      true,
      true,
      DialogAddClientComponent,
      DIALOG_WIDTH_SM
    );
  }

  private getClientList(page: number, size: number) {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    this.api.getClientsListApi(params).subscribe((data: HttpResponse<Client[]>) => {
      try {
        data.body.forEach((item: Client) => {
          this.dataTable = {
            COLUMN_ONE: item.description,
            COLUMN_TWO: item.name,
            COLUMN_THREE: item.id,
            COLUMN_FOUR: item.key,
            COLUMN_FIVE: this.textButton.VIEW
          };
          this.dataTableList.push(this.dataTable);
        });

        this.tableDataToSend = this.dto.createStructTable(
          this.textEs.TABLE_HEADERS,
          this.dataTableList,
          false,
          true,
          false,
          parseInt(data.headers.get('total-elements'), 10)
        );

        this.activeSpinner = false;
      } catch(err) {
        this.activeSpinner = false;
      }
    }, errorResponse => {
      this.activeSpinner = false;
    });
  }

  public changePageTable(event: any) {
    this.getClientList(event, 10);
  }

  public onUpdateTable(update: boolean): void {
    if(!update) {
      this.getClientList(0, 10);
    }
  }

}
