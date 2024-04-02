import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamRepoService } from '../team-repo.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-team',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './display-team.component.html',
  styleUrl: './display-team.component.css'
})
export class DisplayTeamComponent implements OnInit {

  team?: Team = undefined;
  teamNumber: number = 0;
  
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
