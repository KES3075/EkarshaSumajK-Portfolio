import { ClassifiedStamp, TopSecretStamp } from './RedactedText';
import { ThemeToggle } from './ThemeToggle';
import { SecurityClearanceSystem } from './SecurityClearanceSystem';
import { Shield, AlertTriangle, Lock } from 'lucide-react';

export const CIADocumentHeader = () => {
  return (
    <header className="document-page p-3 sm:p-4 md:p-6 lg:p-8 mb-6 sm:mb-8 relative overflow-hidden">
      {/* Security Controls */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 z-30 flex gap-2 sm:gap-3 md:gap-4">
        <div className="relative">
          <SecurityClearanceSystem />
        </div>
        <div className="relative">
          <ThemeToggle />
        </div>
      </div>

      {/* Security Border Pattern */}
      <div className="absolute inset-0 border-4 border-primary/20 pointer-events-none z-5">
        <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-primary"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-primary"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-primary"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-primary"></div>
      </div>

      {/* Background Security Pattern */}
      <div className="absolute inset-4 opacity-5 pointer-events-none z-0">
        <div className="w-full h-full border border-dashed border-primary"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Shield size={200} className="text-primary/10" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Top Classification Banner - Interactive */}
        <div className="bg-accent/10 border border-accent/30 p-2 sm:p-3 mb-4 sm:mb-6 text-center hover:bg-accent/20 hover:border-accent/50 rounded-lg relative z-20 transition-all duration-300 cursor-pointer">
          <p className="text-xs sm:text-sm font-bold text-accent uppercase tracking-widest mb-1 hover:scale-105 transition-transform duration-300">
            TOP SECRET // NOFORN // ORCON
          </p>
          <p className="text-xs opacity-75 hover:opacity-90 transition-opacity duration-300 leading-tight">
            CENTRAL INTELLIGENCE AGENCY - CLASSIFIED PERSONNEL FILE
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between mb-4 sm:mb-6 gap-6 sm:gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 text-center lg:text-left">
            {/* Enhanced CIA Seal - Interactive */}
            <div className="relative cursor-pointer z-10 flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-primary rounded-full flex items-center justify-center relative overflow-hidden hover:scale-110 transition-transform duration-300 z-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 transition-all duration-300"></div>
                <div className="relative">
                  <span className="text-xl sm:text-2xl font-bold hover:text-primary-foreground transition-colors duration-300">CIA</span>
                </div>
                {/* Holographic rings */}
                <div className="absolute inset-1 border border-primary/30 rounded-full animate-pulse hover:border-primary/50 transition-colors duration-300"></div>
                <div className="absolute inset-2 border border-primary/20 rounded-full animate-pulse hover:border-primary/40 transition-colors duration-300" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            {/* Security clearance indicator - inline and interactive */}
            <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded font-mono cursor-pointer hover:scale-110 transition-transform duration-300 hover:shadow-lg relative z-20">
              <span className="hover:text-accent transition-colors duration-300">ALPHA-7</span>
            </div>

            <div className="flex-1">
              <h1 className="document-title border-0 p-0 text-2xl sm:text-3xl mb-2">
                KES
              </h1>
              <p className="text-xs sm:text-sm font-mono tracking-wider mb-1">
                SECURITY CLASSIFICATION: TOP SECRET
              </p>
              <p className="text-xs opacity-75 font-mono mb-1">
                CLEARANCE LEVEL: ALPHA-7 VERIFIED
              </p>
              <div className="flex items-center gap-2 text-xs">
                <Lock size={12} />
                <span className="font-mono">NEURAL SCAN: ACTIVE</span>
              </div>
            </div>
          </div>

          <div className="text-center xl:text-right space-y-1 flex-shrink-0">
            <p className="text-xs font-mono">DOC #: EK-2024-001</p>
            <p className="text-xs font-mono">REV: 8/30/2025</p>
            <p className="text-xs font-mono opacity-75">ORIG: LANGLEY, VA</p>
            <p className="text-xs font-mono opacity-75">DERIVED FROM: MULTIPLE SOURCES</p>
          </div>
        </div>

        {/* Security Warning Footer - Interactive */}
        <div className="border-t border-primary pt-3 sm:pt-4 mt-4 sm:mt-6 cursor-pointer transition-all duration-300 hover:bg-accent/5 rounded-b-lg relative z-10">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-3 hover:scale-105 transition-transform duration-300">
            <AlertTriangle size={14} className="text-accent animate-pulse hover:animate-bounce" />
            <p className="text-xs sm:text-sm text-center uppercase tracking-wider font-bold hover:text-accent transition-colors duration-300 px-2">
              ⚠️ UNAUTHORIZED ACCESS PROHIBITED ⚠️
            </p>
            <AlertTriangle size={14} className="text-accent animate-pulse hover:animate-bounce" />
          </div>
          <p className="text-xs text-center opacity-75 max-w-2xl mx-auto hover:opacity-90 transition-opacity duration-300 px-2">
            This document contains classified information protected under Executive Order 13526. Hover over redacted sections to reveal content. All access attempts are logged and monitored.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-3 text-xs opacity-50 hover:opacity-70 transition-opacity duration-300">
            <span className="hover:text-primary transition-colors duration-300">CONFIDENTIAL</span>
            <span className="hidden sm:inline">•</span>
            <span className="hover:text-primary transition-colors duration-300">SECRET</span>
            <span className="hidden sm:inline">•</span>
            <span className="hover:text-primary transition-colors duration-300">TOP SECRET</span>
          </div>
        </div>
      </div>
    </header>
  );
};
