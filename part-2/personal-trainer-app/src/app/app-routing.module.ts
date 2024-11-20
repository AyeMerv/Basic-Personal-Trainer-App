import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'client-list', component: ClientListComponent }, // Client list route
  { path: 'add-client', component: ClientFormComponent }, // Add client route
  { path: 'edit-client/:id', component: EditClientComponent }, // Edit client route
  { path: 'help', component: HelpPageComponent }, // Help page route
  { path: 'about', component: AboutPageComponent },  // about page route
  { path: '**', component: ErrorPageComponent }, // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
