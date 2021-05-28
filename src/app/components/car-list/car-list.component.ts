import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarDetailDto } from 'src/app/models/DTOs/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent implements OnInit {
  dataLoaded = false;
  carDetails: CarDetailDto[] = [];

  constructor(private carService: CarService, 
    private notificationService: NotificationService,
    private dialog: MatDialog) { }

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
    // const dialogRef = this.dialog.open(are-you-SummaryResolver)
    // this.dialog.openDialogs()

    if (confirm("Are you use you want to delete this car: " + carDetail.id + " / " + carDetail.brand.name + " / " + carDetail.name)) {
      this.carService.deleteCarWithCarDetailDto(carDetail).subscribe(rp => {
        this.notificationService.showInfo("Succesfully deleted!");
        console.log("Deleted!", rp);
      })
    }
    else {
      this.notificationService.showInfo("Car not deleted.");
    }
  }
}
