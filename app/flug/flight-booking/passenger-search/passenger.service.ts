import {Passenger} from "../../../entities/passenger";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class PassengerService {

    passengers: Array<Passenger> = [];

    constructor(private http: Http) {
    }

    find(name: string) {

        let url = 'http://www.angular.at/api/passenger';

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let search = new URLSearchParams();
        search.set('name', name);

        this.http
            .get(url, { headers, search})
            .map(p => p.json())
            .subscribe(passengers => {
                this.passengers = passengers;
            })


    }

}
