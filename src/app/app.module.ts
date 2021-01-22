import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { UserformComponent } from './userform/userform.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from './datatable/datatable.component';
import { CellCustomComponent } from './cell-custom/cell-custom.component';
import { CellInfosComponent } from './cell-infos/cell-infos.component';
import { CellDeleteComponent } from './cell-delete/cell-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    PageNotFoundComponent,
    DatatableComponent,
    CellCustomComponent,
    CellInfosComponent,
    CellDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgGridModule.withComponents([DatatableComponent]),
    ReactiveFormsModule,

  ],
  providers: [],
  entryComponents: [CellCustomComponent, CellDeleteComponent,CellInfosComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
