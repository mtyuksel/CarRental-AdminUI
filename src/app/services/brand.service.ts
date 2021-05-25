import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/response_models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
  apiUrl = environment.api_base_url + "brands/";

  constructor(private httpClient: HttpClient) { }

  addBrand(brand:Brand):Observable<any>{
    return this.httpClient.post(this.apiUrl + "add", brand);
  }

  getBrands(): Observable<ListResponseModel<Brand>> {    
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl + "getall");
  }

  deleteBrand(brand: Brand): Observable<any> {
    return this.httpClient.post(this.apiUrl + "delete", brand);
  }
}
