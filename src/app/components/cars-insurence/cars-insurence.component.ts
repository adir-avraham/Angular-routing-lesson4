import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddOffersService } from '../services/add-offers/add-offers.service';


@Component({
  selector: 'app-cars-insurence',
  templateUrl: './cars-insurence.component.html',
  styleUrls: ['./cars-insurence.component.css']
})
export class CarsInsurenceComponent implements OnInit {

  public offerForm;
  public anotherDriver = false;
  public types  = {
    Ferrari: ["F1", "F2"],
    Lamborghini: ["L1", "L2"],  
    Porsche: ["P1", "P2"],  
    Volkswagen: ["V1", "V2"]
}

  public subTypes;

  constructor(private formBuilder: FormBuilder, private addOffersService: AddOffersService) {

    this.offerForm = this.formBuilder.group({
      customerName: "", 
      customerId: "",
      licensePlate: "",
      year: "",
      type: "",
      subType: "",
      color: "#15a5ea",
      imageUrl: "",
      driverName1: "",
      driverName2: ""
    })

  }


  ngOnInit() {

  }

  addToOffers() {
    this.addOffersService.addOffer(this.offerForm.value);
    this.offerForm.patchValue({
      customerName: "", 
      customerId: "",
      licensePlate: "",
      year: "",
      type: "",
      subType: "",
      color: "#15a5ea",
      imageUrl: "",
      driverName1: "",
      driverName2: ""
    })
  }

  getSubTypes() {
    const typeValue = this.offerForm.value.type
    this.subTypes = this.types[typeValue]
  }

  addAnotherDriver() {
    this.anotherDriver = !this.anotherDriver;
    if (!this.anotherDriver) {
      this.offerForm.patchValue({
        driverName2: ""
      })
    }
  }


}
