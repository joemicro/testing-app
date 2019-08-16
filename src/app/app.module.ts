import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { ChildFormComponent } from './child-form/child-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material';
import { MatSortModule  } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
   
    ChildFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
