"use strict";
// Initialize an empty array to store clients
var clients = [];
// Function to add a new client
function addClient(clientID, name, DOB, gender, fitnessProgram, contactInfo, joinedDate, endingDate, specialHealthNotes, isVIP) {
    // Check if the clientID already exists
    if (clients.some(function (client) { return client.clientID === clientID; })) {
        displayMessage("Client ID must be unique!", "error");
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
    displayMessage("Client added successfully!", "success");
    displayClients();
}
// Function to update the client list display
function displayClients() {
    var appDiv = document.getElementById("app");
    if (!appDiv)
        return;
    // Clear the existing content
    appDiv.innerHTML = "";
    // Loop through the clients and display them
    clients.forEach(function (client) {
        var clientInfo = "\n      <div class=\"client-card\">\n        <h3>".concat(client.name, " (ID: ").concat(client.clientID, ")</h3>\n        <p>DOB: ").concat(client.DOB, "</p>\n        <p>Gender: ").concat(client.gender, "</p>\n        <p>Program: ").concat(client.fitnessProgram, "</p>\n        <p>Contact: ").concat(client.contactInfo, "</p>\n        <p>Joined: ").concat(client.joinedDate, " - Ending: ").concat(client.endingDate, "</p>\n        <p>VIP: ").concat(client.isVIP ? "Yes" : "No", "</p>\n        <p>Special Health Notes: ").concat(client.specialHealthNotes || "N/A", "</p>\n        <button onclick=\"deleteClient('").concat(client.clientID, "')\">Delete</button>\n      </div>\n    ");
        appDiv.innerHTML += clientInfo;
    });
}
// Function to delete a client
function deleteClient(clientID) {
    if (confirm("Are you sure you want to delete this client?")) {
        // Remove the client from the array
        clients = clients.filter(function (client) { return client.clientID !== clientID; });
        displayMessage("Client deleted successfully!", "success");
        displayClients();
    }
}
// Function to display messages to the user
function displayMessage(message, type) {
    var messageDiv = document.getElementById("message");
    if (!messageDiv)
        return;
    messageDiv.textContent = message;
    messageDiv.className = type;
    setTimeout(function () {
        messageDiv.textContent = "";
        messageDiv.className = "";
    }, 3000);
}
// Function to add a client from form input
function addClientFromForm() {
    // Retrieve values from the form fields
    var clientID = document.getElementById("clientID").value.trim();
    var name = document.getElementById("name").value.trim();
    var DOB = document.getElementById("DOB").value.trim();
    var gender = document.getElementById("gender").value;
    // Retrieve the value of fitness program, contact info, join date, end date, and VIP status from the form
    var fitnessProgram = document.getElementById("fitnessProgram").value;
    var contactInfo = document.getElementById("contactInfo").value.trim();
    var joinedDate = document.getElementById("joinedDate").value.trim();
    var endingDate = document.getElementById("endingDate").value.trim();
    var isVIP = document.getElementById("isVIP").checked; // Checkbox for VIP status
    var specialHealthNotes = document.getElementById("specialHealthNotes").value.trim() || null;
    // Check if any required field is empty (basic validation)
    if (!clientID || !name || !DOB || !gender || !fitnessProgram || !contactInfo || !joinedDate || !endingDate) {
        displayMessage("Please fill all the required fields!", "error");
        return;
    }
    // Call addClient with the correct values from the form
    addClient(clientID, name, DOB, gender, fitnessProgram, contactInfo, joinedDate, endingDate, specialHealthNotes, isVIP);
    // Refresh the client list display
    displayClients();
}
