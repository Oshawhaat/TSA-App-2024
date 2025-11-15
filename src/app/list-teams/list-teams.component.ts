import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamRepoService } from '../team-repo.service';
import { Team } from '../decodeTeam';
import { OrderByPipe } from "../order-by.pipe";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-list-teams',
    templateUrl: './list-teams.component.html',
    styleUrl: './list-teams.component.css',
    imports: [NgFor, OrderByPipe, RouterModule, CommonModule, FormsModule]
})
export class ListTeamsComponent implements OnInit {

  teams: Team[] = [];
  teamKeys: string[] = [
    'driveInfo',
    'intakeInfo',
    'launcherInfo',
    'hasSorter',
    'sorterInfo',

    'autoArtifacts',
    'autoScore',
    'autoNotes',

    'artifactsScored',
    'cycleTime',
    'teleOpScore',
    'teleopNotes',

    'endGameStrategy',
    'endGameScore',
    'endGameNotes',

    'averageScore',
  ];
  selectedTeamKey: string = '';
  sortCollumn: string = "number";
  sortAscending: boolean = true;

  constructor(private teamRepo: TeamRepoService) {}

  ngOnInit(): void {
    type x = keyof Team;
    this.teams = this.teamRepo.getTeams();
  }

  sortBy(callName: string) {
    if (this.sortCollumn === callName) {
      this.sortAscending = !this.sortAscending;
    }
    this.sortCollumn = callName;
  }

  headerClass(colName: string): string {
    if (colName !== this.sortCollumn)
      return "fa-chevron-up hide";
    return this.sortAscending ? "fa-chevron-up" : "fa-chevron-down";
  }
}
