import { Component, OnInit } from '@angular/core';
import { Template } from '../template.model'

@Component({
  selector: 'app-templates-list',
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.scss']
})
export class TemplatesListComponent implements OnInit {
  templates: Template[] = [
    {
      sections: {
        html: "<h1>es gaming</h1",
        css: ".siema{dziala:none;}"
      },
      _id: "607aec8272c6fe3af8386394",
      name: "Template 1"
    },
    {
      sections: {
        html: "<h1>es gaming</h1",
        css: ".siema{dziala:none;}"
      },
      _id: "607b12746806d13c2c25ccb3",
      name: "Template 2"
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
