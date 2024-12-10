import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dom',
  imports: [CommonModule, RouterLink],
  templateUrl: './dom.component.html',
  styleUrl: './dom.component.css'
})
export class DOMComponent {

  isVisible: boolean = true

  visible() {
    this.isVisible = true
  }
  notvisible() {
    this.isVisible = false
  }

  toggle() {
    // this.isVisible = !this.isVisible
    this.isRound = !this.isRound
  }

  isRound: boolean = true;
  round() {
    this.isRound = true
  }

  squre() {
    this.isRound = false
  }

  route() {

  }

  cities: string[] = ["surat", "bardoli", "vadodara"]

  tableData = [
    { id: 1, name: "Alice Johnson", age: 28, city: "New York", isActive: true, percentage: 75 },
    { id: 2, name: "Bob Smith", age: 34, city: "Los Angeles", isActive: false, percentage: 60 },
    { id: 3, name: "Charlie Brown", age: 25, city: "Chicago", isActive: true, percentage: 80 },
    { id: 4, name: "Diana Prince", age: 30, city: "Houston", isActive: false, percentage: 55 },
    { id: 5, name: "Ethan Hunt", age: 40, city: "San Francisco", isActive: true, percentage: 90 },
    { id: 6, name: "Fiona Gallagher", age: 27, city: "Boston", isActive: false, percentage: 65 },
    { id: 7, name: "George Miller", age: 35, city: "Seattle", isActive: true, percentage: 85 },
  ];

}
