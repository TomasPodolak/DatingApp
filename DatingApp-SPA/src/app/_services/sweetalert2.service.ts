import { Injectable } from '@angular/core';
import * as Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class Sweetalert2Service {

  private Toast = (Swal as any).mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000
  });

constructor() { }

  success(message: string) {
    this.Toast.fire({
      type: 'success',
      title: message
    });
  }

  error(message: string) {
    this.Toast.fire({
      type: 'error',
      title: message
    });
  }

  warning(message: string) {
    this.Toast.fire({
      type: 'warning',
      title: message
    });
  }

  message(message: string) {
    this.Toast.fire({
      type: 'info',
      title: message
    });
  }

}
