import { Component, OnInit } from '@angular/core';

import { UserService} from '../helpers/user.service';
import { User} from '../helpers/user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cell-infos',
  templateUrl: './cell-infos.component.html',
  styleUrls: ['./cell-infos.component.scss']
})
export class CellInfosComponent implements OnInit {

  data: any;
  params: any;
  id: number;
  user = new User();
  users : User[];
  userModification : User = new User();

  constructor(private modalService: NgbModal, private userService: UserService) {
    this.users = this.userService.users;
    this.user = this.userService.getUserByUserId(this.userService.idModification);

  }

  agInit(params) {
    this.params = params;
    this.data = params.value;
  }

  ngOnInit() {
  }

  // ***** POPUP *****
  closeResult: string;

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  displayUserInfo(id: number){
    var  u = this.userService.getUserByUserId(id);
    var popup = document.getElementById("myPopup");
    popup.classList.toggle('Id: '+ this.params.data.idModification + ' Nom: '+ this.params.data.firstName + ' Prénom: '+ this.params.data.lastName +' Email: '+ this.params.data.email + ' Ville: '+ this.params.data.city );
  }

}
