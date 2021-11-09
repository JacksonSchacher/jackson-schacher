import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDetailsComponent } from './app-details/app-details.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ContactComponent } from './contact/contact.component';
import { DesignComponent } from './design/design.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'app-details/:title', component: AppDetailsComponent},
  {path: 'applications', component: ApplicationsComponent},
  {path: 'designs', component: DesignComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
