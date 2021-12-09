import { BookingsService } from 'src/app/bookings/bookings.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  date = new Date();
  dayFormat = moment().format('dddd');
  dateString = moment().format('L');
  dim = this.dateString.replace(/\//g, '-');
  time = moment().format('LT');

  ngOnInit() {
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  dinga = [
    { button: "+ Add booking", link: "/bookings/addbooking" },
    { button: "+ Add room", link: "" },
    { button: "View Bookings", link: "/bookings" },
    { button: "View Rooms", link: "equipment" },
    { button: "Manage Equipment", link: "fooddrink" },
    { button: "Edit Booking form", link: "options" },
    { button: "Language settings", link: "users" },
    { button: "Back up your files", link: "layoutpeview" },
  ]





}
