import { Component, OnInit } from '@angular/core';
import { Template } from '../template.model'
import { TemplateDataService } from '../../template-data.service'

@Component({
  selector: 'app-templates-list',
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.scss']
})
export class TemplatesListComponent implements OnInit {
  templates: Template[] = [];

  constructor(private templateData: TemplateDataService) { }

  ngOnInit(): void {
    this.getTemplatesData();
  }

  getTemplatesData() {
    return this.templateData.getTemplates().subscribe((res: any) => {
      this.templates = res;
      console.log(this.templates)
    })
  }
}
