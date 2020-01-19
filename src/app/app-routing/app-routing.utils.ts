import { Routes, Route } from '@angular/router';
import { CountriesListComponent } from '../components/countries-list/countries-list.component';
import { CountryPageComponent } from '../components/country-page/country-page.component';
import { HomeComponent } from '../components/home/home.component';
import { MyTripsComponent } from '../components/my-trips/my-trips.component';



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
    { path: "**", redirectTo: "home", pathMatch: "full"},

];

