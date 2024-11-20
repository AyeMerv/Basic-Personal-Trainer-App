import { Injectable } from '@angular/core';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients: Client[] = [];

  getClients(): Client[] {
    return this.clients;
  }
  
  getClientById(id: string): Client | undefined {
    return this.clients.find(client => client.clientID === id);
  }

  // Update client info
  updateClient(updatedClient: Client): void {
    const index = this.clients.findIndex(client => client.clientID === updatedClient.clientID);
    if (index !== -1) {
      this.clients[index] = updatedClient;
    }
  }

  addClient(client: Client): void {
    if (this.clients.some((c) => c.clientID === client.clientID)) {
      throw new Error('Client ID must be unique!');
    }
    this.clients.push(client);
  }

  deleteClient(clientID: string): void {
    this.clients = this.clients.filter((client) => client.clientID !== clientID);
  }
}
