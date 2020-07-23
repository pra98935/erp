import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.addClass();
  }

  addClass(){
    const element = document.getElementsByTagName("body")[0];
    element.className = "";
    element.classList.add("formField");
  }

}
