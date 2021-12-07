import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsLayoutComponent } from './rooms-layout/rooms-layout.component';
import { RoomsComponent } from './rooms/rooms.component';


const routes: Routes = [
  {
    path: "", component: RoomsComponent
  },
  {
    path: "layout", component: RoomsLayoutComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
