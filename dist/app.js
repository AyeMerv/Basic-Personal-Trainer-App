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
        isVIP: isVIP
    };
    // Add the new client to the array
    clients.push(newClient);
    console.log("Client added successfully!");
}
// Function to display all clients
function displayClients() {
    var appDiv = document.getElementById("app");
    if (!appDiv)
        return;
    // Clear the existing content
    appDiv.innerHTML = "";
    // Loop through the clients and display them
    clients.forEach(function (client) {
        var clientInfo = "\n        <div>\n          <h3>".concat(client.name, " (ID: ").concat(client.clientID, ")</h3>\n          <p>DOB: ").concat(client.DOB, "</p>\n          <p>Gender: ").concat(client.gender, "</p>\n          <p>Program: ").concat(client.fitnessProgram, "</p>\n          <p>Contact: ").concat(client.contactInfo, "</p>\n          <p>Joined: ").concat(client.joinedDate, " - Ending: ").concat(client.endingDate, "</p>\n          <p>VIP: ").concat(client.isVIP ? "Yes" : "No", "</p>\n        </div>\n      ");
        appDiv.innerHTML += clientInfo;
    });
}
// Function to get data from the form and add a client
function addClientFromForm() {
    var clientID = document.getElementById("clientID").value;
    var name = document.getElementById("name").value;
    var DOB = document.getElementById("DOB").value;
    var gender = document.getElementById("gender").value;
    // Add default values for missing fields
    addClient(clientID, name, DOB, gender, "overall fitness", "example@contact.com", "2024-01-01", "2025-01-01", null, false);
    // Refresh the client list display
    displayClients();
}
