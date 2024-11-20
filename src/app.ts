// Define the structure of a client
interface Client {
  clientID: string;
  name: string;
  DOB: string;
  gender: "Female" | "Male" | "Unspecified";
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
  isVIP: boolean
): void {
  // Check if the clientID already exists
  if (clients.some(client => client.clientID === clientID)) {
    displayMessage("Client ID must be unique!", "error");
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
  displayMessage("Client added successfully!", "success");
  displayClients();
}

// Function to update the client list display
function displayClients(): void {
  const appDiv = document.getElementById("app");
  if (!appDiv) return;

  // Clear the existing content
  appDiv.innerHTML = "";

  // Loop through the clients and display them
  clients.forEach(client => {
    const clientInfo = `
      <div class="client-card">
        <h3>${client.name} (ID: ${client.clientID})</h3>
        <p>DOB: ${client.DOB}</p>
        <p>Gender: ${client.gender}</p>
        <p>Program: ${client.fitnessProgram}</p>
        <p>Contact: ${client.contactInfo}</p>
        <p>Joined: ${client.joinedDate} - Ending: ${client.endingDate}</p>
        <p>VIP: ${client.isVIP ? "Yes" : "No"}</p>
        <button onclick="deleteClient('${client.clientID}')">Delete</button>
      </div>
    `;
    appDiv.innerHTML += clientInfo;
  });
}

// Function to delete a client
function deleteClient(clientID: string): void {
  if (confirm("Are you sure you want to delete this client?")) {
    clients = clients.filter(client => client.clientID !== clientID);
    displayMessage("Client deleted successfully!", "success");
    displayClients();
  }
}

// Function to display messages to the user
function displayMessage(message: string, type: "success" | "error"): void {
  const messageDiv = document.getElementById("message");
  if (!messageDiv) return;

  messageDiv.textContent = message;
  messageDiv.className = type;
  setTimeout(() => {
    messageDiv.textContent = "";
    messageDiv.className = "";
  }, 3000);
}

// Function to add a client from form input
function addClientFromForm(): void {
  const clientID = (document.getElementById("clientID") as HTMLInputElement).value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const DOB = (document.getElementById("DOB") as HTMLInputElement).value;
  const gender = (document.getElementById("gender") as HTMLSelectElement).value as "Female" | "Male" | "Unspecified";
  const fitnessProgram = (document.getElementById("fitnessProgram") as HTMLSelectElement).value as
    | "fat loss"
    | "senior fitness"
    | "muscle gain"
    | "pre/postnatal fitness"
    | "contest preparation"
    | "overall fitness";
  const contactInfo = (document.getElementById("contactInfo") as HTMLInputElement).value;
  const joinedDate = (document.getElementById("joinedDate") as HTMLInputElement).value;
  const endingDate = (document.getElementById("endingDate") as HTMLInputElement).value;
  const isVIP = (document.getElementById("isVIP") as HTMLInputElement).checked;

  if (!clientID || !name || !DOB || !contactInfo || !joinedDate || !endingDate) {
    displayMessage("Please fill out all required fields!", "error");
    return;
  }

  addClient(clientID, name, DOB, gender, fitnessProgram, contactInfo, joinedDate, endingDate, isVIP);
}

