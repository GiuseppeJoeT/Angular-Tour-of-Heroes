import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // default route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  // The forRoot() method supplies the service providers and directives needed for routing,
  imports: [RouterModule.forRoot(routes)],

  // Exporting RouterModule makes router directives available for use in the AppModule components
  exports: [RouterModule]
})

export class AppRoutingModule { }
