import { Component, Output, EventEmitter } from "@angular/core";
import { Bug } from "../models/Bug";
import { BugOperationsService } from "../serices/bug-operations.service";

@Component({
    selector : 'app-bug-edit',
    template : `
        <section class="edit">
            <label for="">Bug Name :</label>
            <input type="text" (input)="newBugName=$event.target.value">
            <input type="button" value="Add new" (click)="onAddNewClick()">
        </section>
    `
})
export class BugEditComponent{

    newBugName: string = '';

    @Output()
    bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

    constructor(private bugOperations : BugOperationsService ){

    }

    onAddNewClick() {
        this.bugOperations
            .createNew(this.newBugName)
            .subscribe(newBug => this.bugCreated.emit(newBug));
        //the following line should be in the parent component
        //this.bugs = [...this.bugs, newBug];
    }
}