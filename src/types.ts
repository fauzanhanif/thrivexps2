export interface ExperienceCategory {
  id: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  activities: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  image: string;
}

export interface AdventureActivity {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  actions: string[];
}

export interface WhyThrivePillar {
  id: string;
  title: string;
  description: string;
  coreValue: string;
}

export interface TargetAudienceItem {
  id: string;
  title: string;
  members: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string[];
  image: string;
}

export interface CommitmentItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'gathering' | 'team-building' | 'adventure' | 'production';
  image: string;
  caption: string;
  aspect: 'wide' | 'portrait' | 'square';
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  eventType: string;
  estimatedParticipants: string;
  preferredDate: string;
  idea: string;
}
