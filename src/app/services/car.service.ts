import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConnectionService } from '../models/APIConnectionService';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/DTOs/carDetailDto';
import { ListResponseModel } from '../models/response_models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService extends APIConnectionService<Car> {

  constructor(private client:HttpClient) { super("cars") }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiURL + "getcardetails");
  }

  deleteCarWithCarDetailDto(carDetailDto: CarDetailDto): Observable<any> {
    let car = this.convertCarDetailDtoToCar(carDetailDto);
    return super.delete(car);
  }

  private convertCarDetailDtoToCar(carDetailDto: CarDetailDto): Car {
    let car: Car = {
      id: carDetailDto.id,
      brandID: carDetailDto.brand.id,
      colorID: carDetailDto.color.id,
      locationID: carDetailDto.location.id,
      name: carDetailDto.name,
      modelYear: carDetailDto.modelYear,
      dailyPrice: carDetailDto.dailyPrice,
      description: carDetailDto.description
    }

    return car;
  }
}