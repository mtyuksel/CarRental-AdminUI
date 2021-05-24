import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/DTOs/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  dataLoaded = false;
  carDetails: CarDetailDto[] = [];

  constructor(private carService: CarService, private toastrService:ToastrService) { }

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

  editCar(carDetail:CarDetailDto){
    console.log("edit", carDetail);
  }

  removeCar(carDetail:CarDetailDto){
    console.log("remove", carDetail);
    this.carService.deleteCarWithCarDetailDto(carDetail).subscribe(rp => {
      this.toastrService.info("Succesfully deleted!");
      console.log("Deleted!", rp);
    })
  }
}