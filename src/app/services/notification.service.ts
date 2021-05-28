import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  constructor(private toastr: ToastrService) { }

  showInfo(message:string, bottomOrTop:string = "top", leftOrCenterOrRight:string = "right") {
    this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + message, '', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      positionClass: 'toast-' + bottomOrTop + '-' + leftOrCenterOrRight,
      timeOut: 5000
    });
  }

  showSuccess(message:string = "Operation succeded.", bottomOrTop:string = "top", leftOrCenterOrRight:string = "right") {
    this.toastr.success('<span class="tim-icons icon-check-2" [data-notify]="icon"></span>' + message, '', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-success alert-with-icon",
      positionClass: 'toast-' + bottomOrTop + '-' + leftOrCenterOrRight,
      timeOut: 5000
    });
  }

  showError(message:string = "There is an error occurred!", bottomOrTop:string = "top", leftOrCenterOrRight:string = "center") {
    this.toastr.error('<span class="tim-icons icon-alert-circle-exc" [data-notify]="icon"></span>' + message, '', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-success alert-with-icon",
      positionClass: 'toast-' + bottomOrTop + '-' + leftOrCenterOrRight,
      timeOut: 5000
    });
  }

  ngOnInit() { }
}
