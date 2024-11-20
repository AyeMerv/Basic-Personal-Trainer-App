// Define the structure of a client with TypeScript interface
// This ensures consistent data structure throughout the program
interface Client {
  clientID: string; // Unique identifier for the client
  name: string; // Client's full name
  DOB: string; // Date of birth of the client
  gender: "Female" | "Male" | "Unspecified"; // Gender of the client
  fitnessProgram: "fat loss" | "senior fitness" | "muscle gain" | "pre/postnatal fitness" | "contest preparation" | "overall fitness"; 
  // Chosen fitness program
  contactInfo: string; // Contact information
  joinedDate: string; // Date the client joined the program
  endingDate: string; // Date the program ends for the client
  isVIP: boolean; // VIP status
  specialHealthNotes: string | null; // Additional health notes or null if none
}

// Initialize an empty array to store client objects
let clients: Client[] = [];

// Function to add a new client to the list
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
  // Check if the client ID already exists in the array
  if (clients.some(client => client.clientID === clientID)) {
    displayMessage("Client ID must be unique!", "error"); // Show error message
    return; // Stop execution to prevent duplicate entry
  }

  // Create a new client object using the input parameters
  const newClient: Client = {
    clientID,
    name,
    DOB,
    gender,
    fitnessProgram,
    contactInfo,
    joinedDate,
    endingDate,
    isVIP,
    specialHealthNotes,
  };

  // Add the new client to the clients array
  clients.push(newClient);

  // Provide user feedback and update the client list display
  displayMessage("Client added successfully!", "success");
  displayClients(); // Refresh the displayed list of clients
}

// Function to update and display the list of clients on the web page
function displayClients(): void {
  const appDiv = document.getElementById("app"); // Get the container element for client cards
  if (!appDiv) return; // Exit if the container is not found

  // Clear the existing content to avoid duplication
  appDiv.innerHTML = "";

  // Iterate over the clients array to create and append client cards
  clients.forEach(client => {
    const clientInfo = `
      <div class="client-card">
        <h3>${client.name} (ID: ${client.clientID})</h3> <!-- Display name and ID -->
        <p>DOB: ${client.DOB}</p>
        <p>Gender: ${client.gender}</p>
        <p>Program: ${client.fitnessProgram}</p>
        <p>Contact: ${client.contactInfo}</p>
        <p>Joined: ${client.joinedDate} - Ending: ${client.endingDate}</p>
        <p>VIP: ${client.isVIP ? "Yes" : "No"}</p>
        <p>Special Health Notes: ${client.specialHealthNotes || "N/A"}</p>
        <button onclick="deleteClient('${client.clientID}')">Delete</button> <!-- Delete button -->
      </div>
    `;
    appDiv.innerHTML += clientInfo; // Add the client card to the container
  });
}

// Function to delete a client from the list
function deleteClient(clientID: string): void {
  // Ask for confirmation before deleting the client
  if (confirm("Are you sure you want to delete this client?")) {
    // Filter the client array to exclude the client with the specified ID
    clients = clients.filter(client => client.clientID !== clientID);

    // Provide user feedback and update the client list display
    displayMessage("Client deleted successfully!", "success");
    displayClients(); // Refresh the displayed list of clients
  }
}

// Function to display messages (success or error) to the user
function displayMessage(message: string, type: "success" | "error"): void {
  const messageDiv = document.getElementById("message"); // Get the message container
  if (!messageDiv) return; // Exit if the container is not found

  // Set the message text and CSS class based on the message type
  messageDiv.textContent = message;
  messageDiv.className = type;

  // Clear the message after 3 seconds
  setTimeout(() => {
    messageDiv.textContent = "";
    messageDiv.className = "";
  }, 3000);
}

// Function to add a client using form input values
function addClientFromForm(): void {
  // Retrieve values from form input fields
  const clientID = (document.getElementById("clientID") as HTMLInputElement).value.trim();
  const name = (document.getElementById("name") as HTMLInputElement).value.trim();
  const DOB = (document.getElementById("DOB") as HTMLInputElement).value.trim();
  const gender = (document.getElementById("gender") as HTMLSelectElement).value as "Female" | "Male" | "Unspecified";
  const fitnessProgram = (document.getElementById("fitnessProgram") as HTMLSelectElement).value as 
    "fat loss" | "senior fitness" | "muscle gain" | "pre/postnatal fitness" | "contest preparation" | "overall fitness";
  const contactInfo = (document.getElementById("contactInfo") as HTMLInputElement).value.trim();
  const joinedDate = (document.getElementById("joinedDate") as HTMLInputElement).value.trim();
  const endingDate = (document.getElementById("endingDate") as HTMLInputElement).value.trim();
  const isVIP = (document.getElementById("isVIP") as HTMLInputElement).checked;
  const specialHealthNotes = (document.getElementById("specialHealthNotes") as HTMLTextAreaElement).value.trim() || null;

  // Basic validation: ensure all required fields are filled
  if (!clientID || !name || !DOB || !gender || !fitnessProgram || !contactInfo || !joinedDate || !endingDate) {
    displayMessage("Please fill all the required fields!", "error"); // Show error message
    return; // Stop execution if validation fails
  }

  // Call addClient to add the new client with form values
  addClient(clientID, name, DOB, gender, fitnessProgram, contactInfo, joinedDate, endingDate, specialHealthNotes, isVIP);

  // Refresh the client list display to include the new client
  displayClients();
}
