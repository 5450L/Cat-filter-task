import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'cat-filter-task';

  cats: any = {};

  catsObs: any;
  limit = 5;
  breeds: string[] = ['abob', 'bsho', 'orie'];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }
}
