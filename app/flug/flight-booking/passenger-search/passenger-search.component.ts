import { Component} from '@angular/core';
import {PassengerService} from "./passenger.service";
import {Passenger} from "../../../entities/passenger";

@Component({
    templateUrl: './passenger-search.component.html',
    providers: [PassengerService]
})
export class PassengerSearchComponent {
    public name: string = "Muster";

    constructor(private passengerService: PassengerService) {
    }

    get passengers(): Array<Passenger> {
        return this.passengerService.passengers;
    }

    search() {
        this.passengerService.find(this.name);
    }

}