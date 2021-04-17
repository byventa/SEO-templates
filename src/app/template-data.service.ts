import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TemplateDataService {
  url: string = 'http://localhost:3000/api/templates'

  constructor(private httpClient: HttpClient) { }

  postTemplates() {

  }
  deleteTemplate() {

  }
  getTemplates(): Observable<any> {
    return this.httpClient.get<any>(this.url)
      .pipe(retry(1));
  }
}
