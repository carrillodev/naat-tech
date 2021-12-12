export interface HeaderModel {
  TITLE: string;
  TEXT_PLACEHOLDER: string;
  TEXT_ADD_BUTTON: string;
  FLAG_ACTIVE_SEARCH: boolean;
  FLAG_ACTIVE_BUTTON: boolean;
  COMPONENT_DIALOG: any;
  WIDTH_DIALOG?: string;
}

export interface SecondHeaderModel {
  TITLE: string;
  COLUMN_ONE: ColumnDescriptionModel;
  COLUMN_TWO: ColumnDescriptionModel;
  COLUMN_THREE: ColumnDescriptionModel;
  COLUMN_FOUR: ColumnDescriptionModel;
  ACTIVE_ALL_COLUMNS: boolean;
  ACTIVE_COLUMN_FOUR: boolean;
  PREVIOUS_PAGE: string;
}

interface ColumnDescriptionModel {
  TITLE: string;
  DESCRIPTION?: string;
}