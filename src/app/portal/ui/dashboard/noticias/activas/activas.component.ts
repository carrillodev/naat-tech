import { Component, OnInit } from '@angular/core';

// Importaciones de HTTP
import { HttpParams } from '@angular/common/http';

// Importación de modelos
import { DataTableModel } from 'src/app/data/models/local/tableModels';
import { NewsListResponse, NewsDetailResponse } from 'src/app/data/models/response/login/newsResponse';

// Importación de servicios
import { NewsApiService } from 'src/app/data/network/news/news-api.service';

// Importación de constantes
import * as TextES from '../../../../utils/textConstantsES';
import { SPACE } from 'src/app/portal/utils/appConstants';

@Component({
  selector: 'app-activas',
  templateUrl: './activas.component.html',
  styleUrls: ['./activas.component.scss']
})
export class ActivasComponent implements OnInit {
  // Data from table
  public dataTable: DataTableModel;

  // Texts
  public textES = TextES.NEWS;

  private newsList: NewsListResponse[];

  public activeSpinner = true;

  constructor(private newsApi: NewsApiService) { 
    this.getNewsList(0, 10);
  }

  ngOnInit(): void {
    
  }

  private getNewsList(pageNumber: number, pageSize: number) {
    const params = new HttpParams()
    .set('page', pageNumber.toString())
    .set('size', pageSize.toString());

    this.newsApi.getNewsList(params).subscribe((data) => {
      try {
        this.newsList = data;
        this.newsList.forEach((item: NewsListResponse, position: number, list: NewsListResponse[]) => {
          this.getNewsDetail(item.id, position);
        });

        this.dataTable = {
          HEADER_TITLES: this.textES.TABLE_HEADERS,
          LIST_TABLE: this.newsList,
          ACTIVE_IMAGE: true,
          ACTIVE_BUTTON: false,
          ACTIVE_TWO_BUTTONS: true
        };

        this.activeSpinner = false;
      } catch(err) {
        this.activeSpinner = false;
      }
    }, errorResponse => {
      this.activeSpinner = false;
    });
  }

  private getNewsDetail(id: string, pos: number) {
    this.newsApi.getNewsDetailService(id).subscribe((data: NewsDetailResponse) => {
      try {
        this.newsList[pos].author = data.idAuthor.name + SPACE + data.idAuthor.lastName;
      } catch(err) {}
    }, errorResponse => {});
  }

  public changePageTable(event: any) {
    this.getNewsList(event, 10);
  }
}
