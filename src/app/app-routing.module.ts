import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserformComponent } from './userform/userform.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
  { path: 'home', component: DatatableComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'formular', component: UserformComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
