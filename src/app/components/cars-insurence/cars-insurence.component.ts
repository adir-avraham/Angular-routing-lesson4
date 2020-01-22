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

  constructor(private formBuilder: FormBuilder, private addOffersService: AddOffersService) {

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
    this.addOffersService.addOffer(this.offerForm.value);
    this.offerForm.reset();
  }


}
