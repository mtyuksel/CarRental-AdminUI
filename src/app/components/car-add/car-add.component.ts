import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      name: ["", Validators.required, Validators.minLength(2)],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required, Validators.min(50)],
    });
  }
}
