import { Component, HostListener, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BookingsService } from 'src/app/bookings/bookings.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  attendees = "choose"; statuss = "choose"; paymentmethod = "choose";
  room = "choose"; layout = "choose"; duration = "choose";
  form!: FormGroup;
  @Output() dinga: any;
  constructor(private rootForm: FormGroupDirective, private bookingservice: BookingsService) { }
  ngOnInit(): void {
    this.form = this.rootForm.control.get('bookingdetails') as FormGroup;

  }
  // dateOfBirth = new FormControl(); 
  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   // this.events.push(`${type}: ${event.value}`);
  //   this.date = event.value
  // }
  priceCalculator(durationn: string) {
    console.log(this.form.value);
    console.log(this.form);
    let { attendees,
      duration,
      layout,
      room } = this.form.value;
    // let total =attendees*

    let roomPricedetail: any = {
      panaromic: 100,
      smallConferenceroom: 200.67,
      largeConferenceroom: 300.25,
    };
    let layoutPricedetail: any = {
      Classroom: 300.07,
      Confernce: 400.50,
      Theater: 700,
    }
    let durationPricedetail: any = {
      Halfday: 2,
      Fullday: 1,
    }
    let roomPrice = roomPricedetail[room.replace(/\s/g, '')];
    let layoutPrice = layoutPricedetail[layout.replace(/\s/g, '')];
    let durationPrice = durationPricedetail[durationn.replace(/\s/g, '')];
    let total = (attendees * (roomPrice + layoutPrice)) / durationPrice;

    console.log("total", total)
    console.log("romm price", roomPrice)
    console.log("layout price", layoutPrice)
    console.log("durationPrice", durationPrice)
    this.form.patchValue({
      // roomPrice
      // equipmentPrice
      // foodDrinkPrice
      subtotal: +total.toFixed(2),
      tax: +(total / 10).toFixed(2),
      total: +(total + (total / 10)).toFixed(2),
      deposite: +((total + (total / 10)) / 10).toFixed(2),
      roomPrice: +total.toFixed(2),

    });
    // attendees,
    // duration,
    // layout,
    // room

  }
  clientForm(event: any) {
    this.bookingservice.clintDetailFormevent.emit(event);
  }
}
