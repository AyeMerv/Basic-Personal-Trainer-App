import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing components for each route
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';

// Defining application routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (Home Page)
  { path: 'client-list', component: ClientListComponent }, // Route to view the client list
  { path: 'add-client', component: ClientFormComponent }, // Route to add a new client
  { path: 'edit-client/:id', component: EditClientComponent }, // Route to edit an existing client
  { path: 'help', component: HelpPageComponent }, // Route for the Help Page
  { path: 'about', component: AboutPageComponent }, // Route for the About Page
  { path: '**', component: ErrorPageComponent }, // Wildcard route for 404 (Page Not Found)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuring the router with the defined routes
  exports: [RouterModule], // Exporting RouterModule to make routes available throughout the app
})
export class AppRoutingModule {}
