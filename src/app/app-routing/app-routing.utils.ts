import { Routes, Route } from '@angular/router';
import { CountriesListComponent } from '../components/countries-list/countries-list.component';
import { CountryPageComponent } from '../components/country-page/country-page.component';
import { HomeComponent } from '../components/home/home.component';
import { MyTripsComponent } from '../components/my-trips/my-trips.component';
import { UsersListComponent } from '../components/users-list/users-list.component';
import { CarsInsurenceComponent } from '../components/cars-insurence/cars-insurence.component';
import { OffersListComponent } from '../components/offers-list/offers-list.component';




interface CustomRoute extends Route {
    children?: Array<CustomRoute>;
    title?: string;
    isVisible?: boolean;
}


export const routes: Array<CustomRoute> = [

    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent, title: "Home", isVisible: true },
    { path: "countries", component: CountriesListComponent, title: "Countries", isVisible: true },
    { path: "countries/:name", component: CountryPageComponent, title: "Country", isVisible: false },
    { path: "myTrips", component: MyTripsComponent, title: "My Trips", isVisible: true },
    { path: "users", component: UsersListComponent, title: "Users", isVisible: true },
    { path: "carsInsurence", component: CarsInsurenceComponent, title: "Cars Insurence", isVisible: true },
    { path: "offers", component: OffersListComponent, title: "Offers", isVisible: true },
    { path: "**", redirectTo: "home", pathMatch: "full"},

];

