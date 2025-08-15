import { DocumentSection, FormField } from './DocumentSection';
import { RedactedText, TopSecretStamp } from './RedactedText';
import { portfolioData } from '../data/portfolio';
import { Award, ExternalLink, Shield } from 'lucide-react';
import securityBadge from '../assets/security-badge.jpg';

export const CertificationsSection = () => {
  const { certifications } = portfolioData;

  return (
    <DocumentSection title="SECURITY CLEARANCES" classified={true}>
      <div className="space-y-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="border border-border p-4 bg-muted/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-border bg-card overflow-hidden flex items-center justify-center">
                  <RedactedText className="w-full h-full block">
                    <img 
                      src={securityBadge} 
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
              <RedactedText className="flex items-center gap-2">
                <Award size={14} />
                {cert.issuer}
              </RedactedText>
            </FormField>
            
            <FormField label="VERIFICATION">
              <RedactedText>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} />
                  Authentication Portal
                </a>
              </RedactedText>
            </FormField>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
};