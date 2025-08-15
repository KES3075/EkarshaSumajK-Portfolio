import { DocumentSection, FormField } from './DocumentSection';
import { RedactedText, TopSecretStamp } from './RedactedText';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github, Eye } from 'lucide-react';

export const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <DocumentSection title="CLASSIFIED OPERATIONS" classified={true}>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-border p-4 bg-muted/5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold uppercase tracking-wide">
                PROJECT #{project.id}
              </span>
              <TopSecretStamp text="DECLASSIFIED" />
            </div>
            
            <FormField label="CODENAME">
              <RedactedText className="font-semibold">
                {project.name}
              </RedactedText>
            </FormField>
            
            <FormField label="OBJECTIVE">
              <RedactedText className="text-sm leading-relaxed">
                {project.description}
              </RedactedText>
            </FormField>
            
            <FormField label="ARSENAL">
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <RedactedText key={index} className="inline-block">
                    <span className="border border-border px-2 py-1 text-xs bg-accent/10">
                      {tech}
                    </span>
                  </RedactedText>
                ))}
              </div>
            </FormField>
            
            <div className="border-t border-border pt-3 mt-3 flex gap-4">
              <FormField label="INTEL">
              <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                <RedactedText>
                  <div className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Github size={14} />
                    Repository Access
                    <ExternalLink size={12} />
                    </div>
                  </RedactedText>
                </a>
              </FormField>
              
              <FormField label="DEMO">
              <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                <RedactedText>
                  <div className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Eye size={14} />
                    Live Operation
                    <ExternalLink size={12} />
                  </div>
                </RedactedText>
                </a>
              </FormField>
            </div>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
};