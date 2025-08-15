import { DocumentSection, FormField } from './DocumentSection';
import { RedactedText, ClassifiedStamp } from './RedactedText';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import vitLogo from '../assets/vit-logo.jpg';

export const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <DocumentSection title="TRAINING CREDENTIALS" classified={true}>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="border border-border p-4 bg-muted/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border border-border bg-card overflow-hidden flex items-center justify-center">
                  <RedactedText className="w-full h-full block">
                    <img 
                      src={vitLogo} 
                      alt="Institution Logo" 
                      className="w-full h-full object-cover"
                    />
                  </RedactedText>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} />
                  <span className="font-semibold uppercase tracking-wide">ACADEMY #{edu.id}</span>
                </div>
              </div>
              <ClassifiedStamp text="VERIFIED" />
            </div>
            
            <FormField label="INSTITUTION">
              <RedactedText className="font-semibold">
                {edu.institution}
              </RedactedText>
            </FormField>
            
            <FormField label="PROGRAM">
              <RedactedText>
                {edu.degree}
              </RedactedText>
            </FormField>
            
            <FormField label="DURATION">
              <RedactedText className="flex items-center gap-2">
                <Calendar size={14} />
                {edu.period}
              </RedactedText>
            </FormField>
            
            <FormField label="PERFORMANCE">
              <RedactedText className="font-semibold text-accent">
                CGPA: {edu.cgpa}
              </RedactedText>
            </FormField>
            
            <FormField label="LOCATION">
              <RedactedText className="flex items-center gap-2">
                <MapPin size={14} />
                {edu.location}
              </RedactedText>
            </FormField>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
};