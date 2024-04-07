import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TeamRepoService } from '../team-repo.service';
import { ActivatedRoute } from '@angular/router';
import { Team, PixelPlacement, ObjectDetectionToString, ObjectDetection } from '../team';
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
  public ObjectDetection = ObjectDetection;
  
  constructor(private teamRepo: TeamRepoService, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      const teamNumber = Number(this.route.snapshot.params['id']);
      const team = this.teamRepo.getTeam(teamNumber);
      this.team = JSON.parse(JSON.stringify(team));
    });
  }

  onSubmit(addTeamForm: NgForm) {
    this.teamRepo.saveTeam(this.team!)
  }

  display(x: any): string {
    return ObjectDetectionToString[x as ObjectDetection];
  }

}
