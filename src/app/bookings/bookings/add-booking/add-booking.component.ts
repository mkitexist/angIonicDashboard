import { BookingsService } from 'src/app/bookings/bookings.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {
  client = false;
  booking = true;
  userForm!: FormGroup;
  constructor(private bookingservice: BookingsService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      clientdetails: new FormGroup({
        title: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
        name: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(3)] }),
        email: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.email] }),
        phone: new FormControl(null, { validators: [Validators.required, Validators.minLength(10)] }),
        notes: new FormControl(null, { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(180)] }),
        company: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
        address: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
        city: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
        state: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
        zip: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
        country: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),


      }),
      bookingdetails: new FormGroup({
        date: new FormControl(null, { validators: [Validators.required] }),
        attendees: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.min(1), Validators.max(10)] }),
        room: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
        layout: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
        duration: new FormControl(null, { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(180)] }),
        status: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
        paymentMethod: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
        roomPrice: new FormControl(null, { validators: [Validators.min(0)] }),
        equipmentPrice: new FormControl(0.00, { validators: [Validators.min(0)] }),
        foodDrinkPrice: new FormControl(0.00, { validators: [Validators.min(0)] }),
        subtotal: new FormControl(null, { validators: [Validators.min(0)] }),
        tax: new FormControl(null, { validators: [Validators.min(0)] }),
        total: new FormControl(null, { validators: [Validators.min(0)] }),
        deposite: new FormControl(null, { validators: [Validators.min(0)] }),


      })
    });
    this.bookingservice.clintDetailFormevent.subscribe((e) => {
      this.client = true; this.booking = false;

    })
  }
  onSaveClientDetails() {
    // if (!this.userForm.valid && this.dropValue === "choose") {
    //   return;
    // } else {
    console.log(this.userForm.value);
    // }
  }
}
