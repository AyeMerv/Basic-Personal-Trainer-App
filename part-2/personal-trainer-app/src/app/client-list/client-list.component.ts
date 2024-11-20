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

  constructor(private clientService: ClientService) {
    this.clients = this.clientService.getClients();
  }

  deleteClient(clientID: string): void {
    this.clientService.deleteClient(clientID);
    this.clients = this.clientService.getClients(); // Refresh list
  }
}
