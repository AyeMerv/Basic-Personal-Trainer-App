import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  client: Client | undefined;
  clientID: string | null = null;
  successMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get client ID from the URL
    const clientID = this.route.snapshot.paramMap.get('id');
    if (clientID) {
      this.client = this.clientService.getClientById(clientID);
    }
  }

  // Method to save changes
  saveClient(form: NgForm): void {
    if (form.valid && this.client) {
      const updatedClient: Client = {
        ...this.client,
        ...form.value, // Update only the changed fields
      };

      // Show confirmation dialog
      const confirmSave = window.confirm('Are you sure you want to save these changes?');

      if (confirmSave) {
        try {
          this.clientService.updateClient(updatedClient);
          alert('Client information updated successfully!');
          this.router.navigate(['/client-list']); // Navigate back to client list
        } catch (error: any) {
          alert(error.message);
        }
      } else {
        alert('Client update cancelled.');
      }
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
