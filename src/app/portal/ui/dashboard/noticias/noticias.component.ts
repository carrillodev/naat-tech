import { Component, OnInit } from '@angular/core';

// Models
import { HeaderModel } from 'src/app/data/models/local/inputsModels';

// Constants
import { PLUS, SPACE } from 'src/app/portal/utils/appConstants';

// Components & utils
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';
import { BUTTONS, INPUTS, NEWS } from '../../../utils/textConstantsES';
import { DialogAddNewsComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-news/dialog-add-news.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  // Text
  public textES = NEWS;
  public dataToSend: HeaderModel;

  constructor(private dto: GeneralStructsService) {}

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructHeader(
      this.textES.TITLE,
      INPUTS.SEARCH + SPACE + INPUTS.SEARCH_NEW,
      BUTTONS.ADD_NEWS,
      true,
      true,
      DialogAddNewsComponent
    );
  }
}
