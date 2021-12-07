import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'booking-room';
  dinga = [
    { button: "Dahboard", link: "dashboard", name: "time-outline" },
    { button: "Bookings", link: "bookings", name: "clipboard-outline" },
    { button: "Rooms", link: "rooms", name: "copy-outline" },
    { button: "Room layouts", link: "rooms/layout", name: "extension-puzzle-outline" },
    { button: "Equipment", link: "equipment", name: "bag-outline" },
    { button: "Food & Drinks", link: "fooddrink", name: "restaurant-outline" },
    { button: "Options", link: "options", name: "build-outline" },
    { button: "Users", link: "users", name: "people-outline" },
    { button: "Preview & Install", link: "layoutpeview", name: "download-outline" },
    { button: "Logout", link: "logout", name: "log-out-outline" },

  ]
}
// {
//   button: ["Dahboard", "Bookings", "Rooms", "Room layouts", "Equipment", "Food & Drinks", "Options", "Users", "Preview & Install", "Logout",],
//   link: ["dashboard", "bookings", "rooms", "roomlayout", "fooddrink", "options", "users", "layoutpeview", "logout",],
//   name: ["time-outline", "clipboard-outline", "copy-outline", "extension-puzzle-outline", "bag-outline", "restaurant-outline", "build-outline", "people-outline", "download-outline", "log-out-outline"]
// }
