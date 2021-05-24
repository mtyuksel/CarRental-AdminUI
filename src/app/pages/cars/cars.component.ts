import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/DTOs/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  dataLoaded = false;
  carDetails: CarDetailDto[] = [];

  constructor(private carService: CarService, 
    private toastrService: ToastrService, 
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response => {
      this.carDetails = response.data;
      console.log(response);
      this.dataLoaded = true;
    })
  }

  addCar() {
    this.notificationService.showSuccess("Added.");
  }

  editCar(carDetail: CarDetailDto) {
    console.log("edit", carDetail);
  }

  removeCar(carDetail: CarDetailDto) {
    if (confirm("Are you use you want to delete this car: " + carDetail.id + " / " + carDetail.brand.name + " / " + carDetail.name)) {
      this.carService.deleteCarWithCarDetailDto(carDetail).subscribe(rp => {
        this.toastrService.info("Succesfully deleted!");
        console.log("Deleted!", rp);
      })
    }
    else {
      this.toastrService.info("Car not deleted.");
    }
  }
}