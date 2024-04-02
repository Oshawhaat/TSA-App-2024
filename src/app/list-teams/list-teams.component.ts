import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TeamRepoService } from '../team-repo.service';
import { Team } from '../team';
import { OrderByPipe } from "../order-by.pipe";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-list-teams',
    standalone: true,
    templateUrl: './list-teams.component.html',
    styleUrl: './list-teams.component.css',
    imports: [NgFor, OrderByPipe, RouterModule]
})
export class ListTeamsComponent implements OnInit {

  teams: Team[] = [];

  constructor(private teamRepo: TeamRepoService) {}

  ngOnInit(): void {
    this.teams = this.teamRepo.getTeams();
  }

  sortFn(a: Team, b: Team): number {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  }
}
