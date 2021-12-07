import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsLayoutComponent } from './rooms-layout/rooms-layout.component';
import { RoomsRoutingModule } from './room-roting.module';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomsLayoutComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
