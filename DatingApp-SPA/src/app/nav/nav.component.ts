import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
//*import { AlertifyService } from '../_services/alertify.service';*/
import { Sweetalert2Service } from '../_services/sweetalert2.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, /*private alertify: AlertifyService,*/ private swal: Sweetalert2Service) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      //this.alertify.success('Logged in successffully');
      this.swal.success('Logged in successffully');
    },
    error => {
      //this.alertify.error(error);
      this.swal.error(error);
    }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    //this.alertify.message('logged out');
    this.swal.message('Logged in successffully');
  }

}
