
//Defining the structure of a Client object

export interface Client {
  // Unique identifier for the client (e.g., a client number or alphanumeric ID)
  clientID: string;

  // The full name of the client
  name: string;

  // Date of birth of the client, stored as a string (e.g., "YYYY-MM-DD")
  DOB: string;

  // Gender of the client, which can be one of the following options
  gender: 'Female' | 'Male' | 'Unspecified';

  // The type of fitness program the client is enrolled in
  fitnessProgram: 'fat loss' | 'senior fitness' | 'muscle gain' | 'pre/postnatal fitness' | 'contest preparation' | 'overall fitness';

  // Contact information for the client, typically an email address
  contactInfo: string;

  // The date the client joined, stored as a string (e.g., "YYYY-MM-DD")
  joinedDate: string;

  // The date the client’s program ends, stored as a string (e.g., "YYYY-MM-DD")
  endingDate: string;

  // A boolean value indicating if the client is a VIP (true or false)
  isVIP: boolean;

  // Special health notes about the client, could be null if there are no notes
  specialHealthNotes: string | null;
}
