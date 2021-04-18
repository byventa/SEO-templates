import { Component, OnInit } from '@angular/core';
import { Template } from '../template.model'
import { TemplateDataService } from '../../template-data.service'
import { FormBuilder, Validators } from '@angular/forms';
import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-templates-list',
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.scss']
})
export class TemplatesListComponent implements OnInit {

  // VARIABLES
  templates: Template[] = [];
  chosenTemplate: any;
  templateCss: any;
  // FORM
  templateForm = this.fb.group({
    id: ['', Validators.required,]
  })
  downloadForm: any;
  constructor(private templateData: TemplateDataService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getTemplatesData();
  }

  getTemplatesData() {
    return this.templateData.getTemplates().subscribe((res: any) => {
      this.templates = res;
    })
  }

  onSubmit() {
    this.chosenTemplate = this.templates.find(x => x._id === this.templateForm.value.id)
    this.templateCss = { content_style: this.chosenTemplate.sections.css }
    this.downloadForm = this.fb.group({
      fileName: ['', Validators.required],
      htmlTitle: ['', [Validators.required, Validators.maxLength(60)]],
      htmlDesc: ['', [Validators.required, Validators.maxLength(160)]],
      htmlBody: [this.chosenTemplate.sections.html, Validators.required],
      htmlCss: this.chosenTemplate.sections.css
    })
  }
  get htmlDesc() {
    return this.downloadForm.get('htmlDesc');
  }
  get htmlTitle() {
    return this.downloadForm.get('htmlTitle');
  }

  createFile() {
    return this.templateData.postHtmlFile(this.downloadForm.value).subscribe((res: any) => {
      if (res) {
        const blob = new Blob([res.htmlFile], { type: 'text/html' });
        saveAs(blob, res.fileName);
      }
    })
  }

}

