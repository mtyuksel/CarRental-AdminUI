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
      name: ["", [Validators.required, Validators.minLength(2)]]
    });
  }

  addBrand() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      console.log(brandModel);
      this.brandService.add(brandModel).subscribe(r => {
        console.log(r);
        this.notificationService.showSuccess("Brand Added.");
      });
    } else {
      this.notificationService.showError("Please fill all required areas.");
    }

  }
}
