import { Component } from '@angular/core';
import {Flight} from "../../../entities/flight";
import { Http, URLSearchParams } from '@angular/http';
import {FlightService} from "./flight.service";

@Component({
    selector: "flight-search",
    templateUrl: './flight-search.component.html',
    providers: [FlightService],
    styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

    public from: string = "Graz";
    public to: string = "Hamburg";
    public selectedFlight: Flight;

    constructor(private flightService: FlightService) {
    }

    get flights(): Array<Flight> {
        return this.flightService.flights;
    }

    get flights$() {
        return this.flightService.flights$;
    }

    delay() {
        this.flightService.delay();
    }

    undo() {
        this.flightService.undo();
    }

    search() {
           this.flightService.find(this.from, this.to);
    }

    select(flight: Flight) {
        this.selectedFlight = flight;
    }

}