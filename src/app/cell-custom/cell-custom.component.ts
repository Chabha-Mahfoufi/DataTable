import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService} from '../helpers/user.service';
import { User} from '../helpers/user.service';

@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.scss']
})
export class CellCustomComponent implements OnInit {

  data: any;
  params: any;
  id: number;
  user = new User();
  users : User[];
  userModification : User = new User();

  constructor(private userService: UserService, private router: Router) {
    this.users = this.userService.users;

  }

  agInit(params) {
    this.params = params;
    this.data = params.value;
  }

  ngOnInit() {}

  modifyUserInfos(){
    console.log('CellRedrerer Data: ' ,this.params.data);
    this.users = this.params.data;
    this.userService.idModification = this.params.data.idUser;
    this.router.navigate(['formular']);

  }
}
