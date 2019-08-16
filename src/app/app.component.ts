import {
  Component, ViewChild, ViewChildren, QueryList, OnInit, ChangeDetectorRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconRegistry } from '@angular/material/icon';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { ChangeDetection } from '@angular/cli/lib/config/schema';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  title = 'testing-app';

  @ViewChildren("childrenInputs") childrenInputs: QueryList<any>;

  private buttonList: any = false;
  private inputList = [
  ];

  private disabled = false;

  private isFilterActive:boolean = false;
  private myForm = new FormControl("childForm");

  constructor(
    private cd: ChangeDetectorRef
  ) {};

  ngOnInit() {
    this.dataSource.sort = this.sort;

    this.myForm.disable();

    this.myForm.valueChanges.subscribe(v => {
      /* causes ExpressionChangedAfterItHasBeenCheckedError. Fix error keep code structure in places.   */
      this.disabled = true;

      /*What this means is that the change detection cycle itself seems to have caused a change,
      which may have been accidental (ie the change detection cycle caused it somehow) or intentional.
      If you do change something in a change detection cycle on purpose, then this should retrigger a new round of change detection,
      which is not happening here. This error will be suppressed in prod mode, but means you have issues in your code and cause mysterious issues.

      In this case, the specific issue is that you're changing something in a child's change detection cycle
      which affects the parent, and this will not retrigger the parent's change detection even though asynchronous triggers like observables usually do.
      The reason it doesn't retrigger the parent's cycle is becasue this violates unidirectional data flow,
      and could create a situation where a child retriggers a parent change detection cycle,
      which then retriggers the child, and then the parent again and so on, and causes an infinite change detection loop in your app.

      It might sound like I'm saying that a child can't send messages to a parent component,
      but this is not the case, the issue is that a child can't send a message to a parent during a change detection cycle (such as life cycle hooks),
      it needs to happen outside, as in in response to a user event.*/
      this.cd.detectChanges();
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.isFilterActive = !!filterValue;
  }

  testData = {
    a:{
      a_a:"2019-01-01",
      a_b:88,
      a_c:{
        a_c_a:"value",
      }
    },
    b:"2019-02-01"
  }

  /* extract all dates from testData. ignore non date values */
  private extractDate (obj:any):Date[]{
    let result = new Array<Date>();
    Object.keys(obj).forEach(name => {
      if (typeof(obj[name]) === 'Array') {
        obj[name].forEach(item => {

        });
      }
    });
    return result;
  }


}
