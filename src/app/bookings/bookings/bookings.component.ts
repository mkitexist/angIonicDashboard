import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
// import { VueGoodTable } from 'vue-good-table';
export interface PeriodicElement {
  name: string;
  room: string;
  date: string;
  total: string;
  status: string;
  position: number
}
// const ELEMENT_DATA: PeriodicElement[] = [
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, room: "dingi", date: 'Hydrogen', name: "dinga", total: 'H', status: "confirmed", },
  { position: 2, room: "dingi", date: 'Hydrogen', name: "dinga", total: 'H', status: "pending", },
  { position: 3, room: "dingi", date: 'Hydrogen', name: "dinga", total: 'H', status: "canceld", },
  { position: 4, room: "dingi", date: 'Hydrogen', name: "dinga", total: 'H', status: "confirmed", },

];

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'room', 'date', 'name', 'total', 'status', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  constructor() { }
  dinga = false;
  ngOnInit(): void {

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
  editData() {

  }
  deleteData() {

  }
}
