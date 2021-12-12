export interface NotificationToSendModel {
  title: string;
  description: string;
  programmed: string;
  concurrent: string;
};

export interface NotificationSentModel {
  title: string;
  description: string;
  addedBy: string;
  sent: string;
};