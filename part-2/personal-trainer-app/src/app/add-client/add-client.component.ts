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
  constructor(private clientService: ClientService) {}

  addClient(form: NgForm): void {
    if (form.valid) {
      const newClient: Client = {
        ...form.value,
        specialHealthNotes: form.value.specialHealthNotes || null,
      };

      try {
        this.clientService.addClient(newClient);
        alert('Client added successfully!');
        form.reset();
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
