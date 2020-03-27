import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.users = this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
}
