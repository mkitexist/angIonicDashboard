import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  // http://localhost:3005/api/booking
  constructor(private http: HttpClient) { }
  clintDetailFormevent = new EventEmitter();


  addBooking(values: any) {
    return this.http.post(`http://localhost:3005/api/booking`, { ...values });
  }
  getBooking() {
    return this.http.get(`http://localhost:3005/api/booking`);
  }
  deleteBooking(id:string) {
    return this.http.delete(`http://localhost:3005/api/booking/${id}`);
  }

}
