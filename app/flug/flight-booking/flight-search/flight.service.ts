import { Injectable, Inject} from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable, BehaviorSubject} from 'rxjs';
import {Flight} from "../../../entities/flight";
import {BASE_URL_TOKEN} from "../../../app.constants";

@Injectable()
export class FlightService {

    constructor(private http: Http,
                @Inject(BASE_URL_TOKEN) private baseUrl: string) {
    }

    public flights: Array<Flight> = [];

    public flights$ = new BehaviorSubject([]);

    public history: Array<Array<Flight>> = [];

    find(from: string, to: string) {

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let url = this.baseUrl + "/api/flight";

        this.http
                    .get(url, { headers, search })
                    .map(r => r.json())
                    .subscribe(f => {
                        this.flights = f;
                        this.flights$.next(f);

                    },
                    err => {
                        console.error(err);
                    });


    }

    delay() {
        // Mutable
        /*
        let date = new Date(this.flights[0].date);
        date.setTime(date.getTime() + 1000 * 60 * 15);
        this.flights[0].date = date.toISOString();
        */


        let oldFlights = this.flights;
        let oldFlight = oldFlights[0];
        let oldFlightDate = new Date(oldFlight.date);

        let newFlightDate = new Date(oldFlightDate.getTime() + 1000 * 60 * 15);

        let newFlight: Flight = {
            id: oldFlight.id,
            from: oldFlight.from,
            to: oldFlight.to,
            date: newFlightDate.toISOString()
        };

        let newFlights = [
            newFlight,
            ...oldFlights.slice(1)
        ];

        this.flights$.next(newFlights);
        this.flights = newFlights;
        this.history.push(oldFlights);
    }

    undo() {

        var formerState = this.history.pop();
        this.flights = formerState;
        this.flights$.next(formerState);

    }


}