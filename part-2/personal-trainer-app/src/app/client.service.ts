import { Injectable } from '@angular/core';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  // An in-memory array to store the list of clients
  private clients: Client[] = [];

  // Get all clients
  getClients(): Client[] {
    // Returns the list of all clients
    return this.clients;
  }

  // Get a single client by their unique client ID
  getClientById(id: string): Client | undefined {
    // Finds and returns the client whose ID matches the provided ID, or undefined if not found
    return this.clients.find(client => client.clientID === id);
  }

  // Update an existing client's information
  updateClient(updatedClient: Client): void {
    // Finds the index of the client that matches the clientID of the updated client
    const index = this.clients.findIndex(client => client.clientID === updatedClient.clientID);
    
    // If the client is found, updates their information
    if (index !== -1) {
      this.clients[index] = updatedClient;
    }
  }

  // Add a new client to the clients list
  addClient(client: Client): void {
    // Check if a client with the same clientID already exists
    if (this.clients.some((c) => c.clientID === client.clientID)) {
      // Throw an error if the clientID is not unique
      throw new Error('Client ID must be unique!');
    }
    // Adds the new client to the list of clients
    this.clients.push(client);
  }

  // Delete a client by their clientID
  deleteClient(clientID: string): void {
    // Filters out the client with the specified clientID from the clients array
    this.clients = this.clients.filter((client) => client.clientID !== clientID);
  }
}
