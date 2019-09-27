import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
//import { AlertifyService } from '../_services/alertify.service';
import { Sweetalert2Service } from '../_services/sweetalert2.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService, /*private alertify: AlertifyService,*/ private swal: Sweetalert2Service) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      //this.alertify.success('registration successfull');
      this.swal.success('Registration successfull!');
    },
    error => {
     // this.alertify.error(error);
     this.swal.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
