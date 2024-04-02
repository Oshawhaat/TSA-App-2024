import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamRepoService } from '../team-repo.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css'
})
export class AddTeamComponent {

  errorString: string = '';

  constructor(private teamRepo: TeamRepoService) {}

  onSubmit(addTeamForm: NgForm) {
    const addTeam = addTeamForm.value;

    if (!addTeam.teamNumber) return;
    if (!addTeam.teamName) return;

    const team = this.teamRepo.getTeam(Number(addTeam.teamNumber)!);
    if (team) {
      this.errorString = 'Team ' + team.number + ' already exists!';
      return;
    }

    const newTeam: Team = {number: Number(addTeam.teamNumber), name: addTeam.teamName};
    this.teamRepo.addTeam(newTeam);

    this.errorString = '';
    console.log(addTeamForm);
    addTeamForm.resetForm({});
  }
}
