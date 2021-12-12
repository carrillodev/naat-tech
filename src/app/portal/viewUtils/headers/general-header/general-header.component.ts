// Angular material
import { MatDialog } from '@angular/material/dialog';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HeaderModel } from 'src/app/data/models/local/inputsModels';
import { WORK_TEAM } from 'src/app/portal/utils/textConstantsES';
import { DialogAddTeamComponent } from '../../dialog/dialog-add-team/dialog-add-team.component';
import { DIALOG_WIDTH_XL } from 'src/app/portal/utils/appConstants';

@Component({
  selector: 'app-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.scss']
})
export class GeneralHeaderComponent implements OnInit {
  @Input() dataInput: HeaderModel;
  @Output() updateTable = new EventEmitter<boolean>();
  @Output() searchValue = new EventEmitter<string>();

  // Form
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl;

  // Flags
  public flagButton: boolean;
  public flagSearch: boolean;

  // Text
  public textTitle: string;
  public searchLabel: string;
  public addButtonLabel: string;

  constructor(private formBuilder: FormBuilder, private dialogController: MatDialog) { 
    this.searchGroupForm = this.formBuilder.group({
      searchInput: ['', Validators.required]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
  }

  ngOnInit(): void {
    this.textTitle = this.dataInput.TITLE;
    this.searchLabel = this.dataInput.TEXT_PLACEHOLDER;
    this.addButtonLabel = this.dataInput.TEXT_ADD_BUTTON;
    this.flagButton = this.dataInput.FLAG_ACTIVE_BUTTON;
    this.flagSearch = this.dataInput.FLAG_ACTIVE_SEARCH;
  }

  public openDialog() {
    const dialog = this.dialogController.open(this.dataInput.COMPONENT_DIALOG, {
      disableClose: true,
      width: this.dataInput.WIDTH_DIALOG === null ? DIALOG_WIDTH_XL : this.dataInput.WIDTH_DIALOG,
    });

    dialog.afterClosed().subscribe((dialogClose: boolean) => {
      this.updateTable.emit(dialogClose);
    });
  }

  public searchValueEnter(): void {
    this.searchValue.emit(this.searchInput.value);
  }
} 
