import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dasboard/dasboard.module').then(m => m.DasboardModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule)
  }
];
// {  link: "dashboard" },
// { link: "bookings" },
// {  link: "roomlayout" },
// {  link: "equipment" },
// {  link: "fooddrink" },
// { link: "options" },
// { link: "users" },
// {link: "layoutpeview" },
// {  link: "logout" },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
