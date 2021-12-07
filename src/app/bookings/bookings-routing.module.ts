import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from './bookings/add-booking/add-booking.component';
import { BookingsComponent } from './bookings/bookings.component';


const routes: Routes = [
  {
    path: "", component: BookingsComponent
  },
  {
    path: "addbooking", component: AddBookingComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
