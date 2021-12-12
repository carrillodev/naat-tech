import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataTableModel } from 'src/app/data/models/local/tableModels';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit, DoCheck {
  @Input() dataReceived: DataTableModel;
  @Output() changePage = new EventEmitter();

  // List
  public headersList: string[];
  public listTable: [];

  public flag: DataTableModel;

  // Table
  public lengthDataTable: number;

  constructor() { 
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
    this.lengthDataTable = this.dataReceived.TABLE_LENGTH !== undefined ? this.dataReceived.TABLE_LENGTH : 20;
  }
}
