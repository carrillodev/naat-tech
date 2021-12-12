import { Component, OnInit } from '@angular/core';

// Importaciones de form
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

// Importaciones de constantes y utilidades
import {
  DIALOG_NEWS,
  BUTTONS,
  ERROR_MESSAGES,
} from 'src/app/portal/utils/textConstantsES';
import { CREATE_NEWS_CONSTANTS } from 'src/app/portal/utils/serviceConstants';

// Importación de APIS
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';
import { NewsApiService } from 'src/app/data/network/news/news-api.service';
import { JPEG_FORMAT, JPG_FORMAT, PNG_FORMAT } from 'src/app/portal/utils/appConstants';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-news',
  templateUrl: './dialog-add-news.component.html',
  styleUrls: ['./dialog-add-news.component.scss'],
})
export class DialogAddNewsComponent implements OnInit {
  // Textos
  public textES = DIALOG_NEWS;
  public textButtons = BUTTONS;
  public textError = ERROR_MESSAGES;

  // Form
  public addForm: FormGroup;
  public title: AbstractControl;
  public description: AbstractControl;

  // Images
  private imgLargeName: string;
  private generalFormData = new FormData();
  public imageURL: any;

  // Flag
  private readyToSend: boolean;

  constructor(
    private formBuilder: FormBuilder, 
    private utils: GeneralFunctionsService, 
    private api: NewsApiService, 
    private dialog: MatDialogRef<DialogAddNewsComponent>
  ) {
    this.addForm = this.formBuilder.group({
      title: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-z A-Z]{1,50}'),
        ]),
      ],
      description: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-z A-Z]{1,250}'),
        ]),
      ],
    });

    this.title = this.addForm.controls.title;
    this.description = this.addForm.controls.description;
  }

  ngOnInit(): void {}

  public dragOverHandler(imageFile: any): void {
    imageFile.preventDefault();
    imageFile.stopPropagation();
  }

  public dropHandler(event: any): void {
    console.log('Drag and drop', event);
    this.onProcessImage(event[0]);
    
  }

  public uploadByInput(event: any) {
    if(event.target.files[0] !== undefined) {
      this.onProcessImage(event.target.files[0]);
    }
  }

  public saveItem(): void {

  }

  public publishNews(): void {
    if(this.addForm.valid && this.readyToSend) {
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.HEADLINE, this.title.value);
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.SUMMARY, this.description.value);
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.BODY, this.description.value);

      this.api.postCreateNews(this.generalFormData).subscribe((data) => {
        try {
          this.dialog.close(false);
        } catch(err) {
          this.utils.onAlertMessage(this.textError.BAD_INSERT, this.textButtons.OK);
        }
      }, errorResponse => {
        this.utils.onAlertMessage(this.textError.BAD_REQUEST, this.textButtons.OK);
      });
    }
  }

  private onProcessImage(image: any): void {
    if(image.type === PNG_FORMAT || image.type === JPG_FORMAT || image.type === JPEG_FORMAT) {
      // Asignación de nombre de la imagen a nuestra variable
      this.imgLargeName = image.name;

      // Inserción de datos FormData y activación de bandera
      this.generalFormData.append(CREATE_NEWS_CONSTANTS.IMAGE, image, this.imgLargeName);
      this.readyToSend = true;

      // Procesamiento de imagen cargada para poderla visualizar
      const imageRender = new FileReader();
      imageRender.readAsDataURL(image);
      imageRender.onload = () => {
        this.imageURL = imageRender.result;
      };

    } else {
      this.utils.onAlertMessage(this.textError.INVALID_FILE_FORMAT, this.textButtons.OK);
    }
  }
}
