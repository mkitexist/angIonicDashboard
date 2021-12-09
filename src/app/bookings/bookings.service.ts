import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor() { }
  clintDetailFormevent = new EventEmitter();
}
