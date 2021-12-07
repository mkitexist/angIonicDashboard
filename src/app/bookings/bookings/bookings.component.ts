import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor() { }
  dinga = false;
  ngOnInit(): void {
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
}
