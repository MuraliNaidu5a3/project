  
import { Component } from "@angular/core";
import { Bug } from "./models/Bug";
import { BugOperationsService } from "./serices/bug-operations.service";


@Component({
    selector : 'app-bug-tracker',
    templateUrl: './bug-tracker.component.html'
})
export class BugTrackerComponent{
    bugs: Bug[] = [];
    

    sortAttr : string = '';
    sortDesc : boolean = false;

    constructor(private bugOperations : BugOperationsService){
        this.bugOperations
            .getAll()
            .subscribe(bugs => this.bugs = bugs);
            console.log(this.bugs);
    }   


    onNewBugCreated(newBug : Bug){
        this.bugs = [...this.bugs, newBug];
        console.log(this.bugs);
    }

    onRemoveClick(bugToRemove: Bug){
        this.bugOperations
            .remove(bugToRemove)
            .subscribe(() => this.bugs = this.bugs.filter(bug => bug !== bugToRemove))
        
    }

    onBugNameClick(bugToToggle : Bug){
        this.bugOperations
            .toggle(bugToToggle)
            .subscribe(toggledBug => 
                this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
            );
    }

    onRemoveClosedClick(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.onRemoveClick(closedBug));
    }

}