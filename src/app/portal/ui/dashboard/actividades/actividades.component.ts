import { Component, OnInit } from '@angular/core';

// Importaciones de HTTP
import { HttpParams, HttpResponse } from '@angular/common/http';

// Models
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { ActivityListModel } from 'src/app/data/models/response/activities/activityResponse';
import { DataTableModel, StructDataTableModel } from 'src/app/data/models/local/tableModels';

// Services
import { ActivitiesApiService } from 'src/app/data/network/activities/activities-api.service';

// Constants and utilities
import { ACTIVITIES, BUTTONS, INPUTS } from 'src/app/portal/utils/textConstantsES';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {
  public textEs = ACTIVITIES;
  private textPlaceHolder = INPUTS;
  private textButtons = BUTTONS;

  // Inputs
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  public activeSpinner = true;

  constructor(private api: ActivitiesApiService, private dto: GeneralStructsService) { 
    this.getActivitiesList(0, 10);
    this.dataTableList = [];
  }

  ngOnInit(): void {
    this.dataToSend = {
      TITLE: this.textEs.TITLE,
      TEXT_PLACEHOLDER: this.textPlaceHolder.SEARCH,
      TEXT_ADD_BUTTON: '',
      FLAG_ACTIVE_SEARCH: true,
      FLAG_ACTIVE_BUTTON: false,
      COMPONENT_DIALOG: ''
    };
  }

  public getActivitiesList(page: number, size: number) {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    this.api.getActivitiesListService(params).subscribe((data: HttpResponse<ActivityListModel[]>) => {
      try {
        const lista = data.body;
        lista.forEach((item: ActivityListModel, pos: number, array: ActivityListModel[]) => {
          this.dataTable = {
            COLUMN_ONE: item.description,
            COLUMN_TWO: item.name,
            COLUMN_THREE: item.id,
            COLUMN_FOUR: item.key,
            COLUMN_FIVE: this.textButtons.VIEW
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
    this.getActivitiesList(event, 10);
  }

}
