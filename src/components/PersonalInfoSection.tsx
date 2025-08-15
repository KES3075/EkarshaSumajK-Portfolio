import { DocumentSection, FormField } from './DocumentSection';
import { RedactedText, TopSecretStamp } from './RedactedText';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Mail, Phone, Github, Linkedin } from 'lucide-react';

export const PersonalInfoSection = () => {
  const { personalInfo } = portfolioData;

  return (
    <DocumentSection title="PERSONAL INFORMATION" classified={true}>
      <div className="space-y-3">
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
        
        <FormField label="PHONE">
          <RedactedText className="flex items-center gap-2">
            <Phone size={14} />
            {personalInfo.phone}
          </RedactedText>
        </FormField>
        
        <FormField label="EMAIL">
          <RedactedText className="flex items-center gap-2">
            <Mail size={14} />
            {personalInfo.email}
          </RedactedText>
        </FormField>
        
        <FormField label="GITHUB">
          <RedactedText>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Github size={14} />
              {personalInfo.github}
              <ExternalLink size={12} />
            </a>
          </RedactedText>
        </FormField>
        
        <FormField label="LINKEDIN">
          <RedactedText>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Linkedin size={14} />
              {personalInfo.linkedin}
              <ExternalLink size={12} />
            </a>
          </RedactedText>
        </FormField>
        
        <FormField label="PORTFOLIO">
          <RedactedText>
            <a 
              href={personalInfo.portfolio} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              {personalInfo.portfolio}
              <ExternalLink size={12} />
            </a>
          </RedactedText>
        </FormField>
        
        <div className="border-t border-border pt-3 mt-4">
          <FormField label="BIOGRAPHY">
            <RedactedText className="text-sm leading-relaxed">
              {personalInfo.bio}
            </RedactedText>
          </FormField>
        </div>
      </div>
    </DocumentSection>
  );
};