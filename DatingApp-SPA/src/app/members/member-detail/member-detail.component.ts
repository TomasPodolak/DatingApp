import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { Sweetalert2Service } from 'src/app/_services/sweetalert2.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private sweetAlert2: Sweetalert2Service, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

 /* loadUser() {
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe( (user: User) => {
      this.user = user;
    },
    error => {
      this.sweetAlert2.error(error);
    });
  }*/
}
