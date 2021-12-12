export interface ProjectsList {
  description: string;
  id: string;
  idClient: idClient;
  key: string;
  name: string;
  detail?: ProjectDetail;
  enabled?: boolean;
  status?: string;
  action?: string;
}

export interface ProjectDetail {
  creationDate: string;
  description: string;
  enabled: boolean;
  id: string;
  idAuthor: idAuthor;
  idClient: idClient;
  key: string;
  modificationDate: string;
  name: string;
}

interface idClient {
  name: string;
}

interface idAuthor {
  lastName: string;
  name: string;
}