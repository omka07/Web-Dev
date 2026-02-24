import { Component, output } from "@angular/core";

@Component({
    selector : 'app-child',
    styles : `
        .btn {
            padding: 5px;
        }
    `,
    template : ` <button class = "btn" (click)="addItem()">Add item</button>`
})

export class Child{
    addItemEvent = output<string>();
    
    addItem(){
        this.addItemEvent.emit('🐢');
    }
}