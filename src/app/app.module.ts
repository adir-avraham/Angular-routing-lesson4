import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryComponent } from './components/country/country.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { RoutesLinksComponent } from './routes-links/routes-links.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MyTripsComponent } from './components/my-trips/my-trips.component';


import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { CarsInsurenceComponent } from './components/cars-insurence/cars-insurence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    CountryComponent,
    HomeComponent,
    NavbarComponent,
    CountryPageComponent,
    RoutesLinksComponent,
    MyTripsComponent,
    UsersListComponent,
    UserComponent,
    CarsInsurenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
