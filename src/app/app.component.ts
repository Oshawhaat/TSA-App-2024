import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { DisplayTeamComponent } from "./display-team/display-team.component";
import { ListTeamsComponent } from "./list-teams/list-teams.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, AddTeamComponent, DisplayTeamComponent, ListTeamsComponent, FormsModule, RouterModule]
})
export class AppComponent {
  title = 'scouting_app';
}
