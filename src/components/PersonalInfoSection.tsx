import { DocumentSection, FormField } from './DocumentSection';
import { RedactedText, TopSecretStamp } from './RedactedText';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Mail, Phone, Github, Linkedin } from 'lucide-react';
import profileAvatar from '../assets/profile-avatar.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const PersonalInfoSection = () => {
  const { personalInfo } = portfolioData;

  return (
    <DocumentSection title="PERSONAL INFORMATION" classified={true}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Photo Section */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 border-2 border-primary bg-card relative overflow-hidden">
            <RedactedText className="w-full h-full block">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src={personalInfo.logo} 
                  alt="Agent Profile Photo" 
                  className="object-cover"
                />
                <AvatarFallback className="text-xl">ES</AvatarFallback>
              </Avatar>
            </RedactedText>
            <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground text-xs text-center py-1">
              AGENT PHOTO
            </div>
          </div>
        </div>
        
        {/* Information Fields */}
        <div className="flex-1 space-y-3">
        <FormField label="FULL NAME">
          <RedactedText className="font-semibold">
            {personalInfo.name}
          </RedactedText>
        </FormField>
        
        <FormField label="DESIGNATION">
          <RedactedText>
            {personalInfo.title}
          </RedactedText>
          <TopSecretStamp text="SECURED" />
        </FormField>
        
        {/* <FormField label="PHONE">
          <RedactedText className="flex flex-row items-center gap-2">
            <Phone size={14} />
            {personalInfo.phone}
          </RedactedText>
        </FormField> */}
        
        <FormField label="EMAIL">
          <RedactedText>
            <div className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              {personalInfo.email}
            </div>
          </RedactedText>
        </FormField>
        
        <FormField label="GITHUB">
        <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
          <RedactedText>
            <div className="flex items-center gap-2 hover:text-accent transition-colors">
              <Github size={14} />
              {personalInfo.github}
              <ExternalLink size={12} />
            </div>
            </RedactedText>
          </a>
        </FormField>
        
        <FormField label="LINKEDIN">
          <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
            <RedactedText>
            <div className="flex items-center gap-2 hover:text-accent transition-colors">
              <Linkedin size={14} />
              {personalInfo.linkedin}
              <ExternalLink size={12} />
            </div>
            </RedactedText>
            </a>
          
        </FormField>
        
        <FormField label="PORTFOLIO">
          <a 
              href={personalInfo.portfolio} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
            <RedactedText>
            <div className="flex items-center gap-2 hover:text-accent transition-colors">
              {personalInfo.portfolio}
              <ExternalLink size={12} />
            </div>
            </RedactedText>
            </a>
          
        </FormField>
        
        <div className="border-t border-border pt-3 mt-4">
          <FormField label="BIOGRAPHY">
            <RedactedText className="text-sm leading-relaxed">
              {personalInfo.bio}
            </RedactedText>
          </FormField>
        </div>
        </div>
      </div>
    </DocumentSection>
  );
};