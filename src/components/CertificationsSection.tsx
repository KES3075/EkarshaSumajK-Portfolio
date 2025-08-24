import { DocumentSection, FormField } from './DocumentSection';
import { RedactedText, TopSecretStamp } from './RedactedText';
import { portfolioData } from '../data/portfolio';
import { Award, ExternalLink, Shield } from 'lucide-react';

export const CertificationsSection = () => {
  const { certifications } = portfolioData;

  return (
    <DocumentSection title="SECURITY CLEARANCES" classified={true}>
      <div className="space-y-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="border border-border p-4 bg-muted/5">
            <div className="flex items-center justify-between mb-3 flex-col md:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-border bg-card overflow-hidden flex items-center justify-center">
                  <RedactedText className="w-full h-full block">
                    <img 
                      src={cert.logo} 
                      alt="Security Badge" 
                      className="w-full h-full object-cover"
                    />
                  </RedactedText>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={16} />
                  <span className="font-semibold uppercase tracking-wide">CLEARANCE #{cert.id}</span>
                </div>
              </div>
              <TopSecretStamp text="AUTHORIZED" />
            </div>
            
            <FormField label="CERTIFICATION">
              <RedactedText className="font-semibold">
                {cert.name}
              </RedactedText>
            </FormField>
            
            <FormField label="AUTHORITY">
              <RedactedText>
                <div className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Award size={14} />
                  {cert.issuer}
                </div>
              </RedactedText>
            </FormField>
            
            <FormField label="VERIFICATION">
            <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >   
              <RedactedText>
                <div className="flex items-center gap-2 hover:text-accent transition-colors">
                  <ExternalLink size={14} />
                  Authentication Portal
                  <ExternalLink size={12} />
                </div>
                </RedactedText>
              </a>
            </FormField>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
};