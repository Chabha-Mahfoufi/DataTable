import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../helpers/user.service';
import { User } from '../helpers/user.service';
import { City } from '../helpers/user.service';
import { CellCustomComponent } from '../cell-custom/cell-custom.component';
import { CellDeleteComponent } from '../cell-delete/cell-delete.component';
import { CellInfosComponent } from '../cell-infos/cell-infos.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  allCities: City[];
  user = new User();
  users : User[];
  userModification : User= new User();
  rowData = this.userService.users;

  constructor(private router: Router, private userService: UserService) {
    this.users = this.userService.users;
   }

  ngOnInit() {
  }

  // Table
  columnDefs = [
    {headerName: 'Id', field: 'idUser', sortable: true },
    {headerName: 'Nom', field: 'firstName' },
    {headerName: 'Prénom', field: 'lastName' },
    {headerName: 'Ville', field: 'city.cityName' },
    {headerName: 'Email', field: 'email'},
    {headerName: 'Informations', field: 'infos', cellRendererFramework: CellInfosComponent },
    {headerName: 'Actions', field: 'action', cellRendererFramework: CellCustomComponent },
    {headerName: 'Supprimer', field: 'edit', cellRendererFramework: CellDeleteComponent },
  ];

  refreshDataTable(id:number ){
    console.log("EVENT DONE : ", id);
  }
  refreshCells(id:number ){
    console.log("EVENT DONE : ", id);
  }

  getUserByUserId(id : number) : User{
    for (let i=0; i<this.users.length; i++ ){
      let  u : User = this.users[i];
      if (id == u.idUser){
        return u;
      }
    }
  }

  navigate(){
    this.router.navigate(['formular']);
  }

}
