import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { Sweetalert2Service } from '../../_services/sweetalert2.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private sweetalert2: Sweetalert2Service) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe( (users: User[]) => {
      this.users = users;
    },
    error => {
      this.sweetalert2.error(error);
    });
  }

}
