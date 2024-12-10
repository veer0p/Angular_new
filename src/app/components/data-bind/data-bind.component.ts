import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bind',
  imports: [FormsModule],
  templateUrl: './data-bind.component.html',
  styleUrl: './data-bind.component.css'
})
export class DataBindComponent {
  //string, number, bool, data
  corseName: string = "veer"
  inputType = "checkbox"
  nummerType: number = 123
  age: number = 21
  constructor() {
    this.corseName = "123"
  }

  msg: string = "hello"
  oneWay(message: string) {
    this.msg = message
  }
}
