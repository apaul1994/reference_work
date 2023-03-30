import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonService } from './Services/common.service';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AdaCompComponent } from './ada-comp/ada-comp.component';
import { ConvertToCsvComponent } from './convert-to-csv/convert-to-csv.component';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    DynamicFormComponent,
    AgGridComponent,
    AdaCompComponent,
    ConvertToCsvComponent,
    AgGridTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgGridModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
