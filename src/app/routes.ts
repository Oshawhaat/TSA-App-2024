import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayTeamComponent } from './display-team/display-team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { AboutComponent } from './about/about.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

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
    title: 'AddTeam',
  },
  {
    path: 'team/:id/edit',
    component: EditTeamComponent,
    title: 'EditTeam',
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
];
export default routeConfig;