import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.scss']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup;

  constructor(private brandService: BrandService, private formBuilder: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit() {
    this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ["", [Validators.required]]
    });
  }

  add() {
    if (!this.brandAddForm.valid) {
      this.notificationService.showError("Please fill all required areas.");

      return;
    }

    let brandModel = Object.assign({}, this.brandAddForm.value);

    this.brandService.add(brandModel).subscribe(r => {
      if (r.success) {
        this.notificationService.showSuccess(r.message);
      }
      else {
        this.notificationService.showError(r.message);
      }
    }, errorResponse => {
      if (errorResponse?.error?.Errors?.lenght > 0) {
        for (let i = 0; i < errorResponse.error.Errors.length; i++) {
          this.notificationService.showError(errorResponse.error.Errors[i].ErrorMessage, "Validation Error!");
        }
      } else {
        this.notificationService.showError();
      }
    });
  }
}
