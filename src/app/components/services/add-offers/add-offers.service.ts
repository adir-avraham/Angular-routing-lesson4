import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddOffersService {

  arrayOfoffers = [];

  constructor() { }

  addOffer(offer) {
    this.arrayOfoffers.push(offer)
    console.log(this.arrayOfoffers);
    
  }

  getOffers() {
    return this.arrayOfoffers;
  }

  deleteOffer(customerId) {
    this.arrayOfoffers = this.arrayOfoffers.filter(offer => offer.customerId !== customerId);
  }

}
