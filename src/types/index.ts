export type ServiceId = 
  | 'ac-repair' 
  | 'ac-jet-pump-cleaning' 
  | 'ac-installation' 
  | 'refrigerator-repair' 
  | 'washing-machine-repair' 
  | 'microwave-repair';

export type ApplianceCategory = 'AC' | 'Refrigerator' | 'Washing Machine' | 'Microwave Oven' | 'Other';

export interface ServiceDetail {
  id: ServiceId;
  category: ApplianceCategory;
  number: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  commonIssues: string[];
  inspectionSteps: { step: string; title: string; desc: string }[];
  technicalSpecs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  standardNotice: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  serviceTag: ApplianceCategory | 'AC Jet Pump' | 'General';
  text: string;
  highlight: string;
  location?: string;
}

export interface ServiceArea {
  name: string;
  zone: string;
  landmarks: string;
  timing: string;
}

export interface BookingTicket {
  ticketId: string;
  customerName: string;
  phone: string;
  appliance: ApplianceCategory;
  problemDesc: string;
  location: string;
  preferredDate: string;
  preferredTime: string;
  createdAt: string;
  status: 'Received' | 'Inspection Scheduled' | 'In Progress';
}
