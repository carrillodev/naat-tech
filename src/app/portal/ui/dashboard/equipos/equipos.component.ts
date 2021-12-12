import { Component, OnInit } from '@angular/core';

// Importación de interfaces
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/tableModels';
import { DialogAddTeamComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-team/dialog-add-team.component';

// Importación de services, constants and utilities
import { LIST_WORK_TEAMS, PLUS, SPACE } from 'src/app/portal/utils/appConstants';
import { WORK_TEAM, BUTTONS, INPUTS } from '../../../utils/textConstantsES';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';
import { WorkteamApiService } from 'src/app/data/network/workteam/workteam-api.service';

// Importación de mocks
import { WORK_TEAM as MockWorkTeam } from 'src/app/data/models/local/tableMocks';
import { WorkTeamListResponse } from 'src/app/data/models/response/workTeam/workTeamResponse';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  // Text
  public textES = WORK_TEAM;
  private textPlaceholder = INPUTS;
  private textButton = BUTTONS;

  // Inputs
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;

  // Table
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  public activeSpinner = true;

  constructor(
    private dto: GeneralStructsService,
    private api: WorkteamApiService
  ) { 
    this.dataTableList = [];
    this.validateWorkTeamsData();
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textES.TITLE,
      this.textPlaceholder.SEARCH,
      PLUS + SPACE + this.textButton.ADD,
      true,
      true,
      DialogAddTeamComponent
    );
  }

  private getWorkTeamList(page: number, size: number) {
    MockWorkTeam.forEach((item: WorkTeamListResponse) => {
      this.dataTable = {
        COLUMN_ONE: item.area,
        COLUMN_TWO: item.leader,
        COLUMN_THREE: item.collaborators,
        COLUMN_FOUR: item.activities,
        COLUMN_FIVE: this.textButton.VIEW,
      };

      this.dataTableList.push(this.dataTable);
    });

    this.tableDataToSend = this.dto.createStructTable(
      this.textES.TABLE_HEADERS,
      this.dataTableList,
      false,
      true,
      false,
      MockWorkTeam.length
    );
    this.activeSpinner = false;
    localStorage.setItem(LIST_WORK_TEAMS, JSON.stringify(this.dataTableList))
  }

  public changePageTable(page: number) {
    this.getWorkTeamList(page, 10);
  }

  private validateWorkTeamsData(): void {
    if (localStorage.getItem(LIST_WORK_TEAMS) === null) {
      this.getWorkTeamList(0, 10);
    } else {
      this.dataTableList = JSON.parse(localStorage.getItem(LIST_WORK_TEAMS));

      this.tableDataToSend = this.dto.createStructTable(
        this.textES.TABLE_HEADERS,
        this.dataTableList,
        false,
        true,
        false,
        parseInt('10', 10),
      );
      this.activeSpinner = false;
    }
  }

}
