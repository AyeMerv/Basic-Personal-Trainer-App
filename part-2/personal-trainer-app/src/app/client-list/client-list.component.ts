import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent {
  // List of clients to be displayed
  clients: Client[] = [];
  
  // User-entered search term for filtering clients
  searchTerm: string = '';
  
  // Toggle to show only VIP clients
  showVIPs: boolean = false;

  constructor(private clientService: ClientService, private router: Router) {
    // Initialize the list of clients by fetching from the service
    this.clients = this.clientService.getClients();
  }

  /**
   * Navigate to the edit client page.
   */
  editClient(clientID: string): void {
    this.router.navigate(['/edit-client', clientID]); // Navigate to the edit client page with the client ID
  }

  /**
   * Delete a client from the list after confirmation.
   */
  deleteClient(clientID: string): void {
    // Show confirmation dialog before deleting the client
    const confirmDelete = window.confirm('Are you sure you want to delete this client?');

    if (confirmDelete) {
      // Proceed with deletion if confirmed
      this.clientService.deleteClient(clientID);
      
      // Refresh the client list to reflect the deletion
      this.clients = this.clientService.getClients();
    }
  }

  /**
   * Toggle the visibility of VIP clients.
   * If `showVIPs` is true, only VIP clients will be shown.
   */
  toggleVIPs(): void {
    this.showVIPs = !this.showVIPs; // Toggle the VIP filter state
  }

  /**
   * Filter the list of clients based on the search term and VIP status.
   */
  get filteredClients(): Client[] {
    return this.clients.filter(client => {
      // Check if the client's name matches the search term (case-insensitive)
      const matchesSearch = client.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      // Check if the client matches the VIP filter
      const matchesVIP = this.showVIPs ? client.isVIP : true;

      // Include client if both conditions are met
      return matchesSearch && matchesVIP;
    });
  }
}
