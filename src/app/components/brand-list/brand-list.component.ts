import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  dataLoaded = false;
  brands: Brand[] = [];

  constructor(private brandService: BrandService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
      console.log(response);
      this.dataLoaded = true;
    })
  }

  editBrand(brand: Brand) {
    console.log("edit", brand);
  }

  removeBrand(brand: Brand) {
    if (confirm("Are you use you want to delete this brand: " + brand.id + " / " + brand.name)) {
      this.brandService.delete(brand).subscribe(rp => {
        this.notificationService.showInfo("Succesfully deleted!");
        console.log("Deleted!", rp);
      })
    }
    else {
      this.notificationService.showInfo("Brand not deleted.");
    }
  }
}
