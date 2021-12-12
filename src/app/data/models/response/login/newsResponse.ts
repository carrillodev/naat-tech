export interface NewsListResponse {
  body: string;
  creationDate: string;
  headline: string;
  id: string;
  image: string;
  summary: string;
  author?: string;
}

export interface NewsDetailResponse {
  body: string;
  creationDate: string;
  enabled: boolean;
  headline: string;
  idAuthor: IDAuthor;
  id: string;
  image: string;
  modificationDate: string;
  summary: string;
}

interface IDAuthor {
  lastName: string;
  name: string;
}