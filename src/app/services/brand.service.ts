import { Injectable } from '@angular/core';
import { APIConnectionService } from '../models/APIConnectionService';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService extends APIConnectionService<Brand> {  

  constructor() { super("brands") }
}
