import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarDetailDto } from 'src/app/models/DTOs/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
