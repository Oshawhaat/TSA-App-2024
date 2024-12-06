import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TeamRepoService } from '../team-repo.service';
import { ActivatedRoute } from '@angular/router';
import { Team, ScoringObject, ScoringObjectToString, ScoringMethod, LowMedHigh } from '../IntoTheDeepTeam';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-team',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './edit-team.component.html',
  styleUrl: './edit-team.component.css'
})
export class EditTeamComponent {
  
  team?: Team = undefined;
  public ScoringObject = ScoringObject;
  public ScoringMethod = ScoringMethod;
  public LowMedHigh = LowMedHigh;
  
  constructor(private teamRepo: TeamRepoService, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      const teamNumber = Number(this.route.snapshot.params['id']);
      const team = this.teamRepo.getTeam(teamNumber);
      this.team = JSON.parse(JSON.stringify(team));
    });
  }

  onSubmit(addTeamForm: NgForm) {
    this.teamRepo.saveTeam(this.team!);
  }

  display(x: any): string {
    return ScoringObjectToString[x as ScoringObject];
  }

}
