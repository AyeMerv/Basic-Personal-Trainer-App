export interface Client {
  clientID: string;
  name: string;
  DOB: string;
  gender: 'Female' | 'Male' | 'Unspecified';
  fitnessProgram: 'fat loss' | 'senior fitness' | 'muscle gain' | 'pre/postnatal fitness' | 'contest preparation' | 'overall fitness';
  contactInfo: string;
  joinedDate: string;
  endingDate: string;
  isVIP: boolean;
  specialHealthNotes: string | null;
}
