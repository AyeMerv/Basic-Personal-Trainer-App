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
