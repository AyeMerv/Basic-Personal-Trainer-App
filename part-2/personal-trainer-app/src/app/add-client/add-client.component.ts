import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class ClientFormComponent {
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private clientService: ClientService) {}

  // Function to handle form submission
  addClient(clientForm: NgForm): void {
    if (clientForm.valid) {
      const newClient: Client = {
        ...clientForm.value,
        specialHealthNotes: clientForm.value.specialHealthNotes || null,
      };

      // Display confirmation dialog before proceeding
      const confirmAdd = window.confirm('Are you sure you want to add this client?');

      if (confirmAdd) {
        try {
          this.clientService.addClient(newClient);
          this.successMessage = 'Client added successfully!';
          clientForm.reset();
          this.errorMessage = ''; // Clear error message if any
        } catch (error: any) {
          this.successMessage = ''; // Clear success message on error
          this.errorMessage = error.message || 'An error occurred while adding the client.';
        }
      } else {
        this.successMessage = ''; // Clear success message if cancelled
        this.errorMessage = 'Client addition cancelled.';
      }
    } else {
      this.successMessage = ''; // Clear success message if form is invalid
      this.errorMessage = 'Please fill out all required fields.';
    }
  }
}
