import { DocumentSection, FormField } from './DocumentSection';
import { RedactedText, TopSecretStamp } from './RedactedText';
import { portfolioData } from '../data/portfolio';
import { Calendar, Building } from 'lucide-react';
import fixityLogo from '../assets/fixity-logo.jpg';

export const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <DocumentSection title="OPERATIONAL HISTORY" classified={true}>
      <div className="space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="border border-border p-4 bg-muted/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border border-border bg-card overflow-hidden flex items-center justify-center">
                  <RedactedText className="w-full h-full block">
                    <img 
                      src={fixityLogo} 
                      alt="Organization Logo" 
                      className="w-full h-full object-cover"
                    />
                  </RedactedText>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={16} />
                  <span className="font-semibold uppercase tracking-wide">ASSIGNMENT #{exp.id}</span>
                </div>
              </div>
              <TopSecretStamp text="ACTIVE" />
            </div>
            
            <FormField label="ORGANIZATION">
              <RedactedText className="font-semibold">
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors underline"
                >
                  {exp.company}
                </a>
              </RedactedText>
            </FormField>
            
            <FormField label="POSITION">
              <RedactedText>
                {exp.position}
              </RedactedText>
            </FormField>
            
            <FormField label="DURATION">
              <RedactedText className="flex items-center gap-2">
                <Calendar size={14} />
                {exp.period}
              </RedactedText>
            </FormField>
            
            <FormField label="MISSION BRIEF">
              <RedactedText className="text-sm leading-relaxed">
                {exp.description}
              </RedactedText>
            </FormField>
            
            <div className="border-t border-border pt-3 mt-3">
              <FormField label="TECHNOLOGIES">
                <div className="flex flex-wrap gap-1">
                  {exp.technologies.map((tech, index) => (
                    <RedactedText key={index} className="inline-block">
                      <span className="border border-border px-2 py-1 text-xs bg-secondary/20">
                        {tech}
                      </span>
                    </RedactedText>
                  ))}
                </div>
              </FormField>
            </div>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
};