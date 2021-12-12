export interface DataTableModel {
  HEADER_TITLES: string[];
  LIST_TABLE: any;
  ACTIVE_IMAGE: boolean;
  ACTIVE_BUTTON: boolean;
  ACTIVE_TWO_BUTTONS: boolean;
  TABLE_LENGTH?: number;
  SIX_COLUMN?: boolean;
}

export interface StructDataTableModel {
  COLUMN_ONE: string;
  COLUMN_TWO: string;
  COLUMN_THREE: string;
  COLUMN_FOUR: string;
  COLUMN_FIVE: string;
  COLUMN_SIX?: string;
  ID?: string;
}