import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderSidenavComponent } from './shared/header-sidenav/header-sidenav.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  {
    path: 'app',
    component: HeaderSidenavComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'  },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UserComponent },
      { path: 'user/:id', component: UserDetailComponent },
    ],
  },
];
