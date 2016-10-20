import { Routes, RouterModule } from '@angular/router';
import {PassengerSearchComponent} from "./flight-booking/passenger-search/passenger-search.component";
import {FlightEditComponent} from "./flight-booking/flight-edit/flight-edit.component";
import {FlightSearchComponent} from "./flight-booking/flight-search/flight-search.component";
import {FlightBookingComponent} from "./flight-booking/flight-booking.component";
import {AuthGuard} from "../shared/auth/auth.guard";

const ROUTE_CONFIG = [
    {
        path: 'flight-booking',
        component: FlightBookingComponent,
        children: [
            {
                path: 'flight-search',
                component: FlightSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent
            }
        ]
    }
];

export let FlightRouterModule = RouterModule.forChild(ROUTE_CONFIG);