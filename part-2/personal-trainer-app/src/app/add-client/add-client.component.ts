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
  constructor(private clientService: ClientService) {}

  addClient(form: NgForm): void {
    if (form.valid) {
      const newClient: Client = {
        ...form.value,
        specialHealthNotes: form.value.specialHealthNotes || null,
      };

      // Display confirmation dialog before proceeding
      const confirmAdd = window.confirm('Are you sure you want to add this client?');

      if (confirmAdd) {
        try {
          this.clientService.addClient(newClient);
          alert('Client added successfully!');
          form.reset();
        } catch (error: any) {
          alert(error.message);
        }
      } else {
        // If the user cancels, we do nothing
        alert('Client addition cancelled.');
      }
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
