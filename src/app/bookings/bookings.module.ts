import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingsRoutingModule } from './bookings-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddBookingComponent } from './bookings/add-booking/add-booking.component';
import { BookingDetailsComponent } from './bookings/add-booking/booking-details/booking-details.component';
import { ClientDetailsComponent } from './bookings/add-booking/client-details/client-details.component';
@NgModule({
  declarations: [
    BookingsComponent,
    AddBookingComponent,
    BookingDetailsComponent,
    ClientDetailsComponent,
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    IonicModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatCheckboxModule
  ]
})
export class BookingsModule { }
