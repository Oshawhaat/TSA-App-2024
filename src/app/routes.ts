import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayTeamComponent } from './display-team/display-team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { AboutComponent } from './about/about.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ImportTeamsComponent } from './import-teams/import-teams.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'team/:id',
    component: DisplayTeamComponent,
    title: 'Team',
  },
  {
    path: 'add-team',
    component: AddTeamComponent,
    title: 'Add Team',
  },
  {
    path: 'team/:id/edit',
    component: EditTeamComponent,
    title: 'Edit Team',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'suggestions',
    component: SuggestionsComponent,
    title: 'Suggestions',
  },
  {
    path: 'import',
    component: ImportTeamsComponent,
    title: 'Import',
  },
];
export default routeConfig;