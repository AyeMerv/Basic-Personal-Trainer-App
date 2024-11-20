"use strict";

// Initialize an empty array to store clients
var clients = [];

// Function to add a new client
function addClient(clientID, name, DOB, gender, fitnessProgram, contactInfo, joinedDate, endingDate, specialHealthNotes, isVIP) {
    // Check if the clientID already exists
    if (clients.some(function (client) { return client.clientID === clientID; })) {
        console.log("Client ID must be unique!");
        return;
    }

    // Create a new client object
    var newClient = {
        clientID: clientID,
        name: name,
        DOB: DOB,
        gender: gender,
        fitnessProgram: fitnessProgram,
        contactInfo: contactInfo,
        joinedDate: joinedDate,
        endingDate: endingDate,
        isVIP: isVIP,
        specialHealthNotes: specialHealthNotes
    };

    // Add the new client to the array
    clients.push(newClient);
    console.log("Client added successfully!");
}

// Function to display all clients
function displayClients() {
    var appDiv = document.getElementById("app");
    if (!appDiv) return;

    // Clear the existing content
    appDiv.innerHTML = "";

    // Loop through the clients and display them
    clients.forEach(function (client) {
        var clientInfo = `
        <div>
          <h3>${client.name} (ID: ${client.clientID})</h3>
          <p>DOB: ${client.DOB}</p>
          <p>Gender: ${client.gender}</p>
          <p>Program: ${client.fitnessProgram}</p>
          <p>Contact: ${client.contactInfo}</p>
          <p>Joined: ${client.joinedDate} - Ending: ${client.endingDate}</p>
          <p>VIP: ${client.isVIP ? "Yes" : "No"}</p>
          <p>Special Health Notes: ${client.specialHealthNotes || "N/A"}</p>
        </div>
      `;
        appDiv.innerHTML += clientInfo;
    });
}

// Function to get data from the form and add a client
function addClientFromForm() {
    var clientID = document.getElementById("clientID").value.trim();
    var name = document.getElementById("name").value.trim();
    var DOB = document.getElementById("DOB").value.trim();
    var gender = document.getElementById("gender").value.trim();

    // Retrieve the value of fitness program, contact info, join date, end date, and VIP status from the form
    var fitnessProgram = document.getElementById("fitnessProgram").value.trim();
    var contactInfo = document.getElementById("contactInfo").value.trim();
    var joinedDate = document.getElementById("joinedDate").value.trim();
    var endingDate = document.getElementById("endingDate").value.trim();
    var isVIP = document.getElementById("isVIP").checked;
    var specialHealthNotes = document.getElementById("specialHealthNotes").value.trim() || null;

    // Log to check if values are correctly captured
    console.log({
        clientID, name, DOB, gender, fitnessProgram, contactInfo, joinedDate, endingDate, isVIP, specialHealthNotes
    });

    // Check if any required field is empty
    if (!clientID || !name || !DOB || !gender || !fitnessProgram || !contactInfo || !joinedDate || !endingDate) {
        console.log("Please fill all the required fields!");
        return;
    }

    // Call addClient with the correct values from the form
    addClient(clientID, name, DOB, gender, fitnessProgram, contactInfo, joinedDate, endingDate, specialHealthNotes, isVIP);

    // Refresh the client list display
    displayClients();
}
