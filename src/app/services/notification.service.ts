import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  constructor(private toastr: ToastrService) { }

  showInfo(bottomOrTop:string = "top", leftOrCenterOrRight:string = "right", message:string) {
    this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + message, '', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      positionClass: 'toast-' + bottomOrTop + '-' + leftOrCenterOrRight,
      timeOut: 5000
    });
  }

  showSuccess(bottomOrTop:string = "bottom", leftOrCenterOrRight:string = "right", message:string = "Operation succeded.") {
    this.toastr.success('<span class="tim-icons icon-check-2" [data-notify]="icon"></span>' + message, '', {
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
