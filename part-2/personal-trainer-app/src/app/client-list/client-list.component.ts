import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent {
  clients: Client[] = [];
  searchTerm: string = '';
  showVIPs: boolean = false;

  constructor(private clientService: ClientService) {
    this.clients = this.clientService.getClients();
  }

  deleteClient(clientID: string): void {
    // Show confirmation dialog before deleting
    const confirmDelete = window.confirm('Are you sure you want to delete this client?');
    
    if (confirmDelete) {
      // Proceed with deletion if confirmed
      this.clientService.deleteClient(clientID);
      this.clients = this.clientService.getClients(); // Refresh list after deletion
    }
  }

  toggleVIPs(): void {
    this.showVIPs = !this.showVIPs;
  }

  // Getter to filter clients based on search term and VIP status
  get filteredClients(): Client[] {
    return this.clients.filter(client => {
      const matchesSearch = client.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesVIP = this.showVIPs ? client.isVIP : true;
      return matchesSearch && matchesVIP;
    });
  }
}
