import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Sweetalert2Service } from '../_services/sweetalert2.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService, private swal: Sweetalert2Service) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, this.passwordMatchParameter);
  }

  passwordMatchParameter(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
  }

  register() {
  /*  this.authService.register(this.model).subscribe(() => {
      this.swal.success('Registration successfull!');
    },
    error => {
     this.swal.error(error);
    });*/
    console.log(this.registerForm.value);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
