import { Component, OnInit, ViewChild } from '@angular/core';
import{ Project } from "./models/project";
import {ProjectService } from "./services/project.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService : ProjectService) {}
  project: Project[] = [];
  projectName: string;
  searchEmitterValue: string;

  ngOnInit(): void {
    this.projectsAll();
  }

  onNewProject(){
  this.createNew(this.projectName).subscribe(project  => this.project.push(project));
  this.projectName == null;
 
}
createNew(Name: string): Observable<Project> {
  const newProject = {
      id: 0,
      name: Name,
  };
  return this.projectService.save(newProject);
}

projectsAll() {
  this.projectService.getAll().subscribe(project => this.project = project);
}

}
