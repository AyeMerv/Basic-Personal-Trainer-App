// Define the structure of a client
interface Client {
    clientID: string;
    name: string;
    DOB: string;
    gender: "Female" | "Male" | "Unspecified"; // Only these values allowed
    fitnessProgram: "fat loss" | "senior fitness" | "muscle gain" | "pre/postnatal fitness" | "contest preparation" | "overall fitness";
    contactInfo: string;
    joinedDate: string;
    endingDate: string;
    isVIP: boolean;
  }
  
  // Initialize an empty array to store clients
  let clients: Client[] = [];

// Function to add a new client
function addClient(
    clientID: string,
    name: string,
    DOB: string,
    gender: "Female" | "Male" | "Unspecified",
    fitnessProgram: "fat loss" | "senior fitness" | "muscle gain" | "pre/postnatal fitness" | "contest preparation" | "overall fitness",
    contactInfo: string,
    joinedDate: string,
    endingDate: string,
    specialHealthNotes: string | null,
    isVIP: boolean
  ): void {
    // Check if the clientID already exists
    if (clients.some(client => client.clientID === clientID)) {
      console.log("Client ID must be unique!");
      return;
    }
  
    // Create a new client object
    const newClient: Client = {
      clientID,
      name,
      DOB,
      gender,
      fitnessProgram,
      contactInfo,
      joinedDate,
      endingDate,
      isVIP
    };
  
    // Add the new client to the array
    clients.push(newClient);
    console.log("Client added successfully!");
  }

  // Function to display all clients
function displayClients(): void {
    const appDiv = document.getElementById("app");
    if (!appDiv) return;
  
    // Clear the existing content
    appDiv.innerHTML = "";
  
    // Loop through the clients and display them
    clients.forEach(client => {
      const clientInfo = `
        <div>
          <h3>${client.name} (ID: ${client.clientID})</h3>
          <p>DOB: ${client.DOB}</p>
          <p>Gender: ${client.gender}</p>
          <p>Program: ${client.fitnessProgram}</p>
          <p>Contact: ${client.contactInfo}</p>
          <p>Joined: ${client.joinedDate} - Ending: ${client.endingDate}</p>
          <p>VIP: ${client.isVIP ? "Yes" : "No"}</p>
        </div>
      `;
      appDiv.innerHTML += clientInfo;
    });
  }
  
  // Function to get data from the form and add a client
function addClientFromForm(): void {
    const clientID = (document.getElementById("clientID") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const DOB = (document.getElementById("DOB") as HTMLInputElement).value;
    const gender = (document.getElementById("gender") as HTMLSelectElement).value as "Female" | "Male" | "Unspecified";
  
    // Add default values for missing fields
    addClient(clientID, name, DOB, gender, "overall fitness", "example@contact.com", "2024-01-01", "2025-01-01", null, false);
  
    // Refresh the client list display
    displayClients();
  }
  
  