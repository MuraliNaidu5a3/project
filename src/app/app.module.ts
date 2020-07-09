import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugOperationsService } from './bug-tracker/serices/bug-operations.service';
import { BugStorageService } from './bug-tracker/serices/bugStorage.service';
import { ClosedCountPipe } from "./bug-tracker/pipes/closedCount.pipe";
import { BugStatsComponent } from "./bug-tracker/views/bugStats.component";
import { BugEditComponent } from "./bug-tracker/views/bugEdit.component";
import { UtilsModule } from "../utils/utils.module";
import { HttpClientModule } from '@angular/common/http';
import { BugApiService } from './bug-tracker/serices/bugApi.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from "./projects/services/project.service";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    BugStatsComponent,
    BugTrackerComponent,
    BugEditComponent,
    ClosedCountPipe,
    ProjectsComponent,
    HeaderComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule,
    HttpClientModule
  ],
  providers: [BugOperationsService
    , BugStorageService, BugApiService, ProjectService
],
  bootstrap: [AppComponent, BugTrackerComponent]
})
export class AppModule { }
