import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  constructor(private toastr: ToastrService) { }

  ngOnInit() { }

  showInfo(message:string, title:string = "Info", bottomOrTop:string = "top", leftOrCenterOrRight:string = "right") {
    this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + message, title, {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      positionClass: 'toast-' + bottomOrTop + '-' + leftOrCenterOrRight,
      timeOut: 5000
    });
  }

  showSuccess(message:string = "Operation succeded.", title:string = "Success", bottomOrTop:string = "bottom", leftOrCenterOrRight:string = "right") {
    this.toastr.success('<span class="tim-icons icon-check-2" [data-notify]="icon"></span>' + message, title, {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-success alert-with-icon",
      positionClass: 'toast-' + bottomOrTop + '-' + leftOrCenterOrRight,
      timeOut: 5000
    });
  }

  showError(message:string = "There is an error occurred!", title:string = "An Error Occured!", bottomOrTop:string = "bottom", leftOrCenterOrRight:string = "right") {
    this.toastr.error('<span class="tim-icons icon-alert-circle-exc" [data-notify]="icon"></span>' + message, title, {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-error alert-with-icon",
      positionClass: 'toast-' + bottomOrTop + '-' + leftOrCenterOrRight,
      timeOut: 5000
    });
  }
}
