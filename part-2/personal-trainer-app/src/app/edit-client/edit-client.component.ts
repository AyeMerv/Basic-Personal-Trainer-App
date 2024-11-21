import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-edit-client', // Component selector used in templates
  templateUrl: './edit-client.component.html', // Path to the HTML template
  styleUrls: ['./edit-client.component.css'], // Path to the CSS file
})
export class EditClientComponent implements OnInit {
  client: Client | undefined; // Client object to hold the data being edited
  clientID: string | null = null; // Holds the client ID from the route
  successMessage: string = ''; // Message displayed on successful update

  constructor(
    private route: ActivatedRoute, // Service to access route parameters
    private clientService: ClientService, // Service to manage client data
    private router: Router // Router for navigation
  ) {}

  /**
   * Lifecycle hook called after the component initializes.
   */
  ngOnInit(): void {
    // Get client ID from the route parameters
    const clientID = this.route.snapshot.paramMap.get('id');
    if (clientID) {
      // Fetch the client data using the service
      this.client = this.clientService.getClientById(clientID);
    }
  }

  /**
   * Method to handle saving the edited client information.
   */
  saveClient(form: NgForm): void {
    if (form.valid && this.client) {
      // Merge updated form values with the existing client data
      const updatedClient: Client = {
        ...this.client,
        ...form.value, // Update only the fields provided in the form
      };

      // Confirm the save action with the user
      const confirmSave = window.confirm('Are you sure you want to save these changes?');

      if (confirmSave) {
        try {
          // Update the client using the service
          this.clientService.updateClient(updatedClient);

          // Show a success alert and navigate back to the client list
          alert('Client information updated successfully!');
          this.router.navigate(['/client-list']);
        } catch (error: any) {
          // Handle any errors during the update process
          alert(error.message);
        }
      } else {
        // Handle cancellation of the save action
        alert('Client update cancelled.');
      }
    } else {
      // Alert if the form is invalid
      alert('Please fill out all required fields.');
    }
  }
}
