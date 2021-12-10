import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { BookingsService } from '../bookings.service';
// import { VueGoodTable } from 'vue-good-table';
export interface PeriodicElement {
  id: string;
  name: string;
  room: string;
  date: string;
  total: string;
  status: string;
  position: number
}
// const ELEMENT_DATA: PeriodicElement[] = [
// let ELEMENT_DATA: PeriodicElement[] = [
//   // { id: "1", position: 1, room: "dingi", date: 'Hydrogen', name: "dinga", total: 'H', status: "confirmed", },

// ];

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor(private bookingService: BookingsService) { }
  dinga = false;
  tableData: any;
  loadSpinner = true;
  displayedColumns: string[] = [];
  dataSource: any;
  selection: any;
  ELEMENT_DATA: PeriodicElement[] = [
    // { id: "1", position: 1, room: "dingi", date: 'Hydrogen', name: "dinga", total: 'H', status: "confirmed", },

  ];

  ngOnInit(): void {
    this.loadSpinner = true;
   this.fetchingData();
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  editValue(a: any) {
    console.log(a.innerText);
  }
  fetchingData(){
     this.bookingService.getBooking().subscribe((e: any) => {
      console.log("eeeeee", e);
      let bookingData = e;
      let totalData: any = [];
      bookingData.forEach((k: any, i: number) => {
        totalData.push(
          {
            id: k._id,
            position: i + 1,
            room: k.room,
            date: k.date,
            name: k.name,
            total: k.total,
            status: k.status
          }
        )
        this.ELEMENT_DATA = totalData;
        console.log("ELEMENT_DATA", this.ELEMENT_DATA);
        console.log("toalData", totalData);
        this.loadSpinner = false;
      })
      this.displayedColumns = ['select', 'room', 'date', 'name', 'total', 'status', 'actions'];
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      this.selection = new SelectionModel<PeriodicElement>(true, []);
      console.log(bookingData);
      console.log("tableData", this.tableData)

    })
    ,
    ((err:any)=>{
        this.ELEMENT_DATA=[];
    })
  }
  editData() {

  }
  // id:string
  deleteData(id:string) {
    console.log("id",id);
    this.bookingService.deleteBooking(id).subscribe((e)=>{
      console.log(e);
     this.fetchingData();
    })
  }
}
