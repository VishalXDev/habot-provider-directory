export interface Provider {
  id: string;
  name: string;
  category: string;
  description: string;
  specialization: string;
  location: string;
  rating: number;
  shortDescription: string;
  longDescription: string;
  services: string[];
  contactEmail: string;
  phoneNumber: string;
  experience?: string;
  ageGroups?: string[];
  availability?: string;
  languages?: string[];
  image?: string;
}

