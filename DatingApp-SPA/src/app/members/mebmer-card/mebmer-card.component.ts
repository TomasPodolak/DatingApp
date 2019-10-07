import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { Sweetalert2Service } from 'src/app/_services/sweetalert2.service';

@Component({
  selector: 'app-mebmer-card',
  templateUrl: './mebmer-card.component.html',
  styleUrls: ['./mebmer-card.component.css']
})
export class MebmerCardComponent implements OnInit {
  @Input() user: User;

  constructor(private authService: AuthService, private userService: UserService, private sweetalert2: Sweetalert2Service) { }

  ngOnInit() {
  }

  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.sweetalert2.success('You have liked: ' + this.user.knownAs);
    },
    error => {
      this.sweetalert2.error(error);
    });
  }
}
