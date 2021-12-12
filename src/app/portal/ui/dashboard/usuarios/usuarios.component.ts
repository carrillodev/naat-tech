import { Component, OnInit } from '@angular/core';

// Importaciones de http
import { HttpParams } from '@angular/common/http';

// Models
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { UserListResponse } from 'src/app/data/models/response/users/usersResponse';
import { DataTableModel } from 'src/app/data/models/local/tableModels';
import { StructDataTableModel } from 'src/app/data/models/local/tableModels';

// Constants & utils
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { USERS, BUTTONS, INPUTS, STATUS } from '../../../utils/textConstantsES';
import { SPACE } from 'src/app/portal/utils/appConstants';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';

// Importacion de servicios
import { UsersApiService } from 'src/app/data/network/users/users-api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  // Text
  public textEs = USERS;
  public textPlaceholder = INPUTS;
  public textButton = BUTTONS;
  public textStatus = STATUS;

  // Inputs
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;

  // Table
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  public activeSpinner = true;

  constructor(
    private dto: GeneralStructsService, 
    private api: UsersApiService,
    private utils: GeneralFunctionsService
  ) { 
    // Inicializacion
    this.dataTableList = [];
    this.getUserList(0, 10);
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textEs.TITLE,
      this.textPlaceholder.SEARCH + SPACE + this.textPlaceholder.SEARCH_USERS,
      this.textButton.ADD_USER,
      true,
      true,
      ''
    );
  }

  private getUserList(page: number, size: number) {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    this.api.getUserListApi(params).subscribe((data: UserListResponse[]) => {
      try {
        data.forEach((item: UserListResponse) => {
          this.dataTable = {
            COLUMN_ONE: item.name,
            COLUMN_TWO: item.email,
            COLUMN_THREE: this.utils.getFormatDate(item.creationDate),
            COLUMN_FOUR: this.textButton.VIEW,
            COLUMN_FIVE: item.enabled ? this.textStatus.ACTIVE : this.textStatus.INACTIVE,
            COLUMN_SIX: this.textButton.DELETE_INACTIVE
          };

          this.dataTableList.push(this.dataTable);
        });

        this.tableDataToSend = this.dto.createStructTable(
          this.textEs.TABLE_HEADERS,
          this.dataTableList,
          false,
          false,
          false,
          parseInt('10', 10),
          true
        );

        this.activeSpinner = false;
      }catch(err) {
        this.activeSpinner = false;
      }
    }, errorResponse => {
      this.activeSpinner = false;
    });
  }

  public changePageTable(event: any) {
    this.getUserList(event, 10);
  }

}
