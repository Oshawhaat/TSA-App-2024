import { Injectable } from '@angular/core';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamRepoService {

  readonly localStorageKey: string = 'teams';
  
  teams: Team[] = [
    { number: 13737, name: 'Belton Cyber Pirates', autoScore: 45, teleOpScore: 60, endGameScore: 35, averageScore: 140, canHang: true },
  ];

  constructor() {
    const json = localStorage.getItem(this.localStorageKey);
    if (!json) return;

    this.teams = JSON.parse(json) as Team[];
  }

  getTeam(teamNumber: number): Team|undefined {
    const team = this.teams.find(x => x.number === teamNumber);
    return team;
  }

  saveTeam(team: Team) {
    const existingTeam = this.getTeam(team.number);
    if (!existingTeam) return;

    const index = this.teams.indexOf(existingTeam)
    this.teams.splice(index, 1, team);

    const json = JSON.stringify(this.teams);
    localStorage.setItem(this.localStorageKey, json);
  }

  addTeam(team: Team): void {
    this.teams.push(team);

    const json = JSON.stringify(this.teams);
    localStorage.setItem(this.localStorageKey, json);
  }

  getTeams(): Team[] {
    return this.teams;
  }
}
