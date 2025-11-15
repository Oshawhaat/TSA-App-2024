import { Component } from '@angular/core';
import { Team } from '../IntoTheDeepTeam';
import { TeamRepoService } from '../team-repo.service';
import { CommonModule, NgFor } from '@angular/common';
import { OrderByPipe } from "../order-by.pipe";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-suggestions',
    templateUrl: './suggestions.component.html',
    styleUrl: './suggestions.component.css',
    imports: [NgFor, CommonModule, OrderByPipe, RouterModule]
})
export class SuggestionsComponent {
  teams: Team[] = [];
  
  constructor(private teamRepo: TeamRepoService) {}

  ngOnInit(): void {
    type x = keyof Team;
    this.teams = this.teamRepo.getTeams();
  }

  // teamsCanHang(): Team[] {
  //   return this.teams.filter(x => x.canHang)
  // };
}
