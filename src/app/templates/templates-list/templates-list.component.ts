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
  // FORM
  templateForm = this.fb.group({
    id: ['', Validators.required]
  })

  // VARIABLES
  templates: Template[] = [];
  submited: boolean = false;
  chosenTemplate: any = [];

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
    this.submited = true;
    this.chosenTemplate = this.templates.find(x => x._id === this.templateForm.value.id)
  }
}
