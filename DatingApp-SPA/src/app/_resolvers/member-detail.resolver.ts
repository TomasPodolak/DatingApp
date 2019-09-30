import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Sweetalert2Service } from '../_services/sweetalert2.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberDetailResolver implements Resolve<User> {

  constructor(
    private userService: UserService,
    private router: Router,
    private sweetalert2: Sweetalert2Service
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {    
    return this.userService.getUser(route.params['id']).pipe(
        catchError(error => {
            this.sweetalert2.error('Problem retrieving data');
            this.router.navigate(['/members']);
            return of(null);
        })
    );
  }
}
