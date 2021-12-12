import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';

// Models
import { DataTableModel } from 'src/app/data/models/local/tableModels';

// Importación de utilidades
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss']
})
export class GeneralTableComponent implements OnInit, DoCheck {
  @Input() dataReceived: DataTableModel;
  @Output() changePage = new EventEmitter();

  // List
  public headersList: string[];
  public listTable: [];

  public flag: DataTableModel;
  public activeImage: boolean;
  public activeButton: boolean;
  public activeTwoButtons: boolean;
  public sixColumn: boolean;

  // Table
  public lengthDataTable: number;
  public imageNews: string;


  constructor(public utilities: GeneralFunctionsService) {
    this.flag = this.dataReceived;
  }

  ngDoCheck(): void {
    if(this.dataReceived !== undefined) {
      this.prepareData();
    }
  }
  
  ngOnInit(): void {
    
  }

  public changePageTable(event: any) {    
    this.changePage.emit(event.pageIndex);
  }

  private prepareData() {
    this.flag = this.dataReceived;
    this.headersList = this.dataReceived.HEADER_TITLES;
    this.listTable = this.dataReceived.LIST_TABLE;
    this.activeImage = this.dataReceived.ACTIVE_IMAGE;
    this.activeButton = this.dataReceived.ACTIVE_BUTTON;
    this.activeTwoButtons = this.dataReceived.ACTIVE_TWO_BUTTONS;
    this.lengthDataTable = this.dataReceived.TABLE_LENGTH !== undefined ? this.dataReceived.TABLE_LENGTH : 20;
  }
}
