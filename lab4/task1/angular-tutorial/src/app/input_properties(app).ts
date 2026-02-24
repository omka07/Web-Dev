import { Component } from "@angular/core";
import {User} from './input_properties(user)';

@Component({
    selector : 'app-root',
    template : `<app-user name="Simran"></app-user>`,
    imports : [User],
})

export class App{

}