import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamRepoService } from '../team-repo.service';
import { Team } from '../IntoTheDeepTeam';

@Component({
  selector: 'app-import-teams',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './import-teams.component.html',
  styleUrl: './import-teams.component.css'
})
export class ImportTeamsComponent {
  exportText: string = "";
  importText: string = "";

  constructor(private teamRepo: TeamRepoService) {}
  
  exportData() {
    this.exportText = JSON.stringify(this.teamRepo.teams);
  }

  importData() {
    var teams: Team[] = JSON.parse(this.importText) as Team[];
    teams.forEach(team => {
      if (!this.teamRepo.hasTeamNumber(team.number)) {
        this.teamRepo.addTeam(team);
      }
    });
  }
}
