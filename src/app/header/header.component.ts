
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

    bugStatus: Boolean = true;

    constructor( private route: Router) {
    }

    navigateBugs() {
        this.route.navigate(['/bugs']);
    }

    navigateProjects() {
        this.route.navigate(['/projects']);
    }
}
