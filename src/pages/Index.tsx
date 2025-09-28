import { PersonalInfoSection } from '@/components/PersonalInfoSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { CIADocumentHeader } from '@/components/CIADocumentHeader';
import UserDataDisplay from '@/components/UserDataDisplay';
import { useUserData } from '@/hooks/useUserData';
import { AlertTriangle } from 'lucide-react';

const Index = () => {
  const { userData } = useUserData();

  return (
    <div className="min-h-screen bg-background p-2 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced CIA Document Header */}
        <CIADocumentHeader />

        {/* User Data Display */}
        {/* <UserDataDisplay userData={userData} /> */}

        {/* Portfolio Sections */}
        <div className="space-y-8">
          <PersonalInfoSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
        </div>

        {/* Enhanced Document Footer */}
        <footer className="document-page p-4 md:p-6 mt-8 relative overflow-hidden">
          {/* Footer Security Pattern */}
          <div className="absolute inset-0 border-t-2 border-primary/20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

          <div className="relative z-10">
            {/* Classification Footer */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded">
                <AlertTriangle size={14} className="text-accent" />
                <span className="text-sm font-bold text-accent uppercase tracking-widest">
                  TOP SECRET // NOFORN // ORCON
                </span>
                <AlertTriangle size={14} className="text-accent" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center text-xs">
              <div>
                <p className="font-mono">END OF DOCUMENT</p>
                <p className="font-mono opacity-75">CLASSIFICATION: TOP SECRET</p>
              </div>

              <div>
                <p className="font-mono">PAGE 1 OF 1</p>
                <p className="font-mono opacity-75">TOTAL PAGES: 1</p>
              </div>

              <div>
                <p className="font-mono">ACCESS LOGGED</p>
                <p className="font-mono opacity-75">SESSION: {new Date().toISOString().split('T')[0]}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-center opacity-75">
                This classified document was generated using advanced neural network protocols.
                All content is protected under Executive Order 13526 and the Espionage Act of 1917.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mt-2 text-xs opacity-50">
                <span>CONFIDENTIAL</span>
                <span className="hidden sm:inline">•</span>
                <span>SECRET</span>
                <span className="hidden sm:inline">•</span>
                <span>TOP SECRET</span>
                <span className="hidden sm:inline">•</span>
                <span>ALPHA-7</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
