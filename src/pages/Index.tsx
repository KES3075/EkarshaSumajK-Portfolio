import { PersonalInfoSection } from '@/components/PersonalInfoSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ClassifiedStamp } from '@/components/RedactedText';

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Document Header */}
        <header className="document-page p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">CIA</span>
              </div>
              <div>
                <h1 className="document-title mb-0 border-0 p-0 text-left">
                  PERSONNEL DOSSIER
                </h1>
                <p className="text-sm text-muted-foreground mt-2">
                  SECURITY CLASSIFICATION: TOP SECRET
                </p>
              </div>
            </div>
            <div className="text-right">
              <ClassifiedStamp text="TOP SECRET" />
              <p className="text-xs mt-2">DOC #: EK-2024-001</p>
              <p className="text-xs">REV: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="border-t border-primary pt-4">
            <p className="text-sm text-center uppercase tracking-wider">
              ⚠️ UNAUTHORIZED ACCESS PROHIBITED ⚠️
            </p>
            <p className="text-xs text-center mt-2 text-muted-foreground">
              This document contains classified information. Hover over redacted sections to reveal content.
            </p>
          </div>
        </header>

        {/* Portfolio Sections */}
        <div className="space-y-8">
          <PersonalInfoSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
        </div>

        {/* Document Footer */}
        <footer className="document-page p-6 mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            END OF DOCUMENT - CLASSIFICATION LEVEL: TOP SECRET
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This portfolio was generated using classified document protocols.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
