import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Component({
  selector: 'hello',
  template: `<h2>Hello.component.ts</h2>
              <ul>
                <li *ngFor="let user of (users | async)">
                  {{ user.name }}
                </li>
              </ul>
              <hr>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit  {
  @Input() name: string;
  users: any;

  constructor(private http: HttpClient, private backend: HttpBackend) {
      this.http = new HttpClient(backend);
   }

  ngOnInit() {
    this.users = this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
