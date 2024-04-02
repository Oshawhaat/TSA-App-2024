import { Component } from '@angular/core';
import { ListTeamsComponent } from "../list-teams/list-teams.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ListTeamsComponent]
})
export class HomeComponent {

}
