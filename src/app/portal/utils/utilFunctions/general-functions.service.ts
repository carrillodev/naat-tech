import { Injectable } from '@angular/core';

// Angular material
import {MatSnackBar} from '@angular/material/snack-bar';

// Constantes
import { COLONS, SLASH, TIME_SNACK_BAR } from '../appConstants';

@Injectable({
  providedIn: 'root'
})
export class GeneralFunctionsService {

  constructor( private snackBar: MatSnackBar ) { }

  public getNameOrLastName(name: string): string {
    return name.split(' ')[0];
  }

  public generateProjectKey(projectName: string): string {
    return projectName.trim().toUpperCase().replace(/ /g, '_');
  }

  public onAlertMessage(message: string, textButtonAcction: string) {
    this.snackBar.open(message, textButtonAcction, {
      duration: TIME_SNACK_BAR
    });
  }

  public getFormatDate(date: string): string {
    const dateSplit = date.split('T');
    const dateSplitFormat = dateSplit[0].split('-');
    return dateSplitFormat[2] + SLASH + dateSplitFormat[1] + SLASH + dateSplitFormat[0];
  }

  public getFormatTime(date: string): string {
    const timeSplit = date.split('T');
    const timeSplitFormat = timeSplit[1].split(':');
    return timeSplitFormat[0] + COLONS + timeSplitFormat[1];
  }
}
