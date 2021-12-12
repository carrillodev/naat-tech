import { HttpHeaders } from '@angular/common/http';

export const PRINCIPAL_HEADER = new HttpHeaders()
.set('Access-Control-Allow-Origin', '*')
.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
.set('Access-Control-Allow-Headers', 'X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Request-Method')
.set('Content-Type', 'application/json');

export const CREATE_NEWS_CONSTANTS = {
  IMAGE: 'image',
  HEADLINE: 'headline',
  SUMMARY: 'summary',
  BODY: 'body'
}