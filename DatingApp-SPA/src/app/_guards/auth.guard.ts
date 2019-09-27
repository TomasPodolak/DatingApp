import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Sweetalert2Service } from '../_services/sweetalert2.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router, private sweetAlert2: Sweetalert2Service) {}

  canActivate(): boolean {
    if(this.authService.loggedIn()) {
      return true;
    }

    this.sweetAlert2.error('You shall not pass!!!');
    this.router.navigate(['/home']);
    return false;
  }

}
