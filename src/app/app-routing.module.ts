import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  // {path : '', redirectTo : '', pathMatch : 'full'},
  {path : 'bugs', component : BugTrackerComponent  },
  {path : 'projects', component : ProjectsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
