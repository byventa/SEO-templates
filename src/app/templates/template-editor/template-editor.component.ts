import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.scss']
})
export class TemplateEditorComponent implements OnInit {
  @Input() template: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.template)
  }

}
