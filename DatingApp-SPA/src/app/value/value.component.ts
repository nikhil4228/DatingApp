import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  id = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvalues();
    this.getValueById();
  }

  getvalues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

  getValueById() {
    if (this.id === 0 && this.id < 3) {
      this.id++;
    } else {
      this.id = 7;
    }

    this.http.get('http://localhost:5000/api/values/' + this.id).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
      }
    );
  }
}
