import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/DTOs/carDetailDto';
import { ListResponseModel } from '../models/response_models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = environment.api_base_url + "cars/";

  constructor(private httpClient: HttpClient) { }

  addCar(car:Car):Observable<any>{
    return this.httpClient.post(this.apiUrl + "add", car);
  }

  getCars(): Observable<ListResponseModel<Car>> {    
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + "getall");
  }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl + "getcardetails");
  }

  deleteCar(car: Car): Observable<any> {
    return this.httpClient.post(this.apiUrl + "delete", car);
  }

  deleteCarWithCarDetailDto(carDetailDto: CarDetailDto): Observable<any> {
    let car = this.convertCarDetailDtoToCar(carDetailDto);
    return this.deleteCar(car);
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