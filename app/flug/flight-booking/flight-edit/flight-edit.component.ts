import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
    template: `
        <h1>{{info}}</h1>
        <p>
            ... Hier könnte auch der Flug mit der Id {{id}} stehen ...
        </p>
    `
})
export class FlightEditComponent {
    public info = "FlightEdit";

    public id: string;

    constructor(route: ActivatedRoute) {
        route.params.subscribe(p => {
            this.id = p['id'];
        })
    }

}