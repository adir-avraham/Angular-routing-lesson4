import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cars-insurence',
  templateUrl: './cars-insurence.component.html',
  styleUrls: ['./cars-insurence.component.css']
})
export class CarsInsurenceComponent implements OnInit {

  public offerForm;

  constructor(private formBuilder: FormBuilder) {

    this.offerForm = this.formBuilder.group({
      customerName: "", 
      customerId: "",
      licensePlate: "",
      year: "",
      type: "",
      subType: "",
      color: "#15a5ea",
      imageUrl: ""
    })

  }


  ngOnInit() {
  }

  addToOffers() {
    console.log(this.offerForm.value)
  }


}
