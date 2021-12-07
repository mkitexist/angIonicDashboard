import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  attendees = "choose"; statuss = "choose"; paymentmethod = "choose";
  room = "choose"; layout = "choose"; duration = "choose";
  constructor() { }

  ngOnInit(): void {
  }

}
