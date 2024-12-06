import { Component, Input, OnInit } from '@angular/core';
import { Team, ScoringObject, ScoringMethod } from '../IntoTheDeepTeam';
import { TeamRepoService } from '../team-repo.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-display-team',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './display-team.component.html',
  styleUrl: './display-team.component.css'
})
export class DisplayTeamComponent implements OnInit {
  
  team?: Team = undefined;
  teamNumber: number = 0;
  
  get ScoringObject() {return ScoringObject}
  get ScoringMethod() {return ScoringMethod}
  
  constructor(private teamRepo: TeamRepoService, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.teamNumber = Number(this.route.snapshot.params['id']);
      this.team = this.teamRepo.getTeam(this.teamNumber);
    });
  }

  ngOnInit(): void {
    //this.team = this.teamRepo.getTeam(this.teamNumber);
  }
}
