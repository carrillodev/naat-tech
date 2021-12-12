import { Component, OnInit } from '@angular/core';

// Models
import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import {
  DataTableModel,
  StructDataTableModel,
} from 'src/app/data/models/local/tableModels';
import {
  NotificationToSendModel,
  NotificationSentModel,
} from 'src/app/data/models/response/notifications/notificationsResponse';

// Constants and utils
import { NOTIFICATIONS, BUTTONS, INPUTS } from '../../../utils/textConstantsES';
import { DIALOG_WIDTH_L, DIALOG_WIDTH_XL, LIST_NOTIFICATIONS_TO_SEND, LIST_SENT_NOTIFICATIONS, PIPE, SPACE } from 'src/app/portal/utils/appConstants';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';

// Importación de servicios
import { NotificationsApiService } from 'src/app/data/network/notifications/notifications-api.service';

// Importación de mocks
import { NOTIFICATIONS_TO_SEND, NOTIFICATIONS_SENT } from 'src/app/data/models/local/tableMocks';
import { DialogAddNotificationComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-notification/dialog-add-notification.component';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss'],
})
export class NotificacionesComponent implements OnInit {
  public textEs = NOTIFICATIONS;
  private textButton = BUTTONS;

  // Inputs
  public dataToSend: HeaderModel;
  public tableDataToSend: DataTableModel;
  public tableSentData: DataTableModel;

  // Table
  private dataTableList: StructDataTableModel[];
  private dataTable: StructDataTableModel;

  public dataSentTableList: StructDataTableModel[];
  private dataSentTable: StructDataTableModel;

  constructor(
    private dto: GeneralStructsService,
    private api: NotificationsApiService,
    private utilities: GeneralFunctionsService
  ) {
    this.dataTableList = [];
    this.dataSentTableList = [];
    this.validateNotificationsToSend();
    this.validateNotificationsSent();
    this.getNotificationsToSend(0, 10);
    this.getNotificationsSent(0, 10);
  }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      NOTIFICATIONS.TITLE,
      SPACE,
      BUTTONS.ADD_NOTIFICATION,
      false,
      true,
      DialogAddNotificationComponent,
      DIALOG_WIDTH_XL
    );
  }

  private validateNotificationsToSend() {
    if(localStorage.getItem(LIST_NOTIFICATIONS_TO_SEND) === null) {
      localStorage.setItem(LIST_NOTIFICATIONS_TO_SEND, JSON.stringify(NOTIFICATIONS_TO_SEND));
    }
  }

  private validateNotificationsSent() {
    if(localStorage.getItem(LIST_SENT_NOTIFICATIONS) === null) {
      localStorage.setItem(LIST_SENT_NOTIFICATIONS, JSON.stringify(NOTIFICATIONS_SENT));
    }
  }

  private getNotificationsToSend(page: number, size: number) {
    NOTIFICATIONS_TO_SEND.forEach((item: NotificationToSendModel) => {
      this.dataTable = {
        COLUMN_ONE: item.title,
        COLUMN_TWO: item.description,
        COLUMN_THREE: this.utilities.getFormatDate(item.programmed) + PIPE + this.utilities.getFormatTime(item.programmed),
        COLUMN_FOUR: item.concurrent,
        COLUMN_FIVE: this.textButton.VIEW,
        COLUMN_SIX: this.textButton.DELETE_INACTIVE,
      }

      this.dataTableList.push(this.dataTable);
    });

    this.tableDataToSend = this.dto.createStructTable(
      this.textEs.TABLE_HEADERS_ONE,
      this.dataTableList,
      false,
      true,
      true,
      parseInt('10', 10),
      true
    );
  }

  private getNotificationsSent(page: number, size: number) {
    NOTIFICATIONS_SENT.forEach((item: NotificationSentModel) => {
      this.dataSentTableList.push({
        COLUMN_ONE: item.title,
        COLUMN_TWO: item.description,
        COLUMN_THREE: item.addedBy,
        COLUMN_FOUR: this.utilities.getFormatDate(item.sent) + PIPE + this.utilities.getFormatTime(item.sent),
        COLUMN_FIVE: this.textButton.DELETE_INACTIVE
      });
    });
  }

  public changePageTable(page: number) {
    this.getNotificationsToSend(page, 10);
  }

  public changePageTableSent(page: number) {
    this.getNotificationsSent(page, 10);
  }
}
