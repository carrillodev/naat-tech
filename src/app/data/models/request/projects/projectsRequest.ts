export interface UpdateProjectDetail {
  key: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface ObjectNewProject {
  clientId: string;
  clientName: string;
  newProject: NewProject;
}

export interface NewProject {
  key: string;
  name: string;
  description: string;
}