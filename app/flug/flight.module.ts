import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlightSearchComponent} from "./flight-booking/flight-search/flight-search.component";
import {SharedModule} from "../shared/shared.module";
import {FlightCardComponent} from "./flight-booking/flight-search/flight-card.component";
import {FlightEditComponent} from "./flight-booking/flight-edit/flight-edit.component";
import {PassengerSearchComponent} from "./flight-booking/passenger-search/passenger-search.component";
import {FlightRouterModule} from "./flight.routes";
import {FlightBookingComponent} from "./flight-booking/flight-booking.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        FlightRouterModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        FlightEditComponent,
        FlightBookingComponent,
        PassengerSearchComponent
    ]
})
export class FlightModule {
}