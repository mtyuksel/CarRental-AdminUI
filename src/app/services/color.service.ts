
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIConnectionService } from '../models/APIConnectionService';
import { Color } from '../models/color';


@Injectable({
  providedIn: 'root'
})
export class ColorService extends APIConnectionService<Color> {
  
  constructor() { super("colors") }

}
