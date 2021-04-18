import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PostHtml } from './templates/template.model';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class TemplateDataService {
  url: string = 'http://localhost:3000/api/templates'
  urlDownload: string = 'http://localhost:3000/download'

  constructor(private httpClient: HttpClient) { }

  getTemplates(): Observable<any> {
    return this.httpClient.get<any>(this.url)
      .pipe(retry(1));
  }
  postHtmlFile(formData: PostHtml): Observable<PostHtml> {
    return this.httpClient.post<PostHtml>(this.urlDownload, formData)
  }

}
