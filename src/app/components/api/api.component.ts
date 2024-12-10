import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api',
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {

  userList: any[] = []

  constructor(private http: HttpClient) {

  }
  getData() {
    debugger
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      debugger
      this.userList = result;
      console.log(this.userList);

    })
  }
}
