import { Component, OnInit } from '@angular/core';
import { Template } from '../template.model'
import { TemplateDataService } from '../../template-data.service'
import { FormBuilder, Validators } from '@angular/forms';


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
  // Forms
  // FORM
  templateForm = this.fb.group({
    id: ['', Validators.required]
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
      console.log(this.templates)
    })
  }

  onSubmit() {
    this.chosenTemplate = this.templates.find(x => x._id === this.templateForm.value.id)
    this.templateCss = { content_style: this.chosenTemplate.sections.css }
    console.log(this.chosenTemplate)
    console.log(this.templateCss)
    this.downloadForm = this.fb.group({
      fileName: ['', Validators.required],
      htmlTitle: ['', Validators.required],
      htmlDesc: ['', Validators.required],
      htmlBody: [this.chosenTemplate.sections.html, Validators.required]
    })
  }
  download() {
    console.log(this.downloadForm.value);
  }
}
