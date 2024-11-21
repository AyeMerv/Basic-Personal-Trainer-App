import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service'; // Service to handle client-related logic
import { Client } from '../client.model'; // Client model for type definition

@Component({
  selector: 'app-client-form', // Selector for the component
  templateUrl: './add-client.component.html', // Template HTML file
  styleUrls: ['./add-client.component.css'], // CSS file for styling
})
export class ClientFormComponent {
  // Messages for user feedback
  successMessage: string = ''; // To display success messages
  errorMessage: string = ''; // To display error messages

  // Injecting the ClientService to manage clients
  constructor(private clientService: ClientService) {}

  /**
   * Function to handle the submission of the client form
   */
  addClient(clientForm: NgForm): void {
    // Check if the form is valid
    if (clientForm.valid) {
      // Create a new client object based on form values
      const newClient: Client = {
        ...clientForm.value, // Copy all values from the form
        specialHealthNotes: clientForm.value.specialHealthNotes || null, // Default to null if empty
      };

      // Display confirmation dialog to the user
      const confirmAdd = window.confirm('Are you sure you want to add this client?');

      if (confirmAdd) {
        // If the user confirms, proceed with adding the client
        try {
          this.clientService.addClient(newClient); // Call the service to add the client
          this.successMessage = 'Client added successfully!'; // Update success message
          clientForm.reset(); // Reset the form after successful submission
          this.errorMessage = ''; // Clear any previous error messages
        } catch (error: any) {
          // Handle any errors that occur during client addition
          this.successMessage = ''; // Clear success message if there's an error
          this.errorMessage = error.message || 'An error occurred while adding the client.'; // Set error message
        }
      } else {
        // If the user cancels the action
        this.successMessage = ''; // Clear success message
        this.errorMessage = 'Client addition cancelled.'; // Inform the user about cancellation
      }
    } else {
      // If the form is invalid, display an error message
      this.successMessage = ''; // Clear any success message
      this.errorMessage = 'Please fill out all required fields.'; // Set validation error message
    }
  }
}
