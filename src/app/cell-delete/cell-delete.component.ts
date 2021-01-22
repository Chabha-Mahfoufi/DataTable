import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { UserService} from '../helpers/user.service';
import { User} from '../helpers/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cell-delete',
  templateUrl: './cell-delete.component.html',
  styleUrls: ['./cell-delete.component.scss']
})
export class CellDeleteComponent implements OnInit {

  data: any;
  params: any;
  id: number;
  user = new User();
  users : User[];
  userModification : User = new User();

  @Input()
  idUser:number;
  @Output()
  DeleteUserEvent = new EventEmitter<number>();

  constructor(private userService : UserService, private router: Router) {
    this.users = this.userService.users;
  }

  ngOnInit() {
  }

  agInit(params) {
    this.params = params;
    this.data = params.value;
  }


  deleteUser(){
    console.log('CellRedrerer Data: ' ,this.params.data.idUser );
    for(let i=0; i<this.users.length; i++)
    if(this.users[i].idUser ==  this.params.data.idUser){
      this.userService.users.splice(i,1);
      this.DeleteUserEvent.emit(this.params.data.idUser);
      break;
    }
    console.log('Deletede user: ' , this.params.data)
  }
}

