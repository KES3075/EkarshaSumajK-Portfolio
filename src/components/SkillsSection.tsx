import { DocumentSection } from './DocumentSection';
import { RedactedText, ClassifiedStamp } from './RedactedText';
import { portfolioData } from '../data/portfolio';

export const SkillsSection = () => {
  const { skills } = portfolioData;
  
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <DocumentSection title="TECHNICAL CAPABILITIES" classified={true}>
      <div className="space-y-4">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="border-b border-border pb-3">
            <div className="flex items-center gap-4 mb-2">
              <span className="font-semibold uppercase text-xs tracking-wider w-24">
                {category}:
              </span>
              <ClassifiedStamp text="RESTRICTED" />
            </div>
            <div className="flex flex-wrap gap-2 ml-24">
              {categorySkills.map((skill) => (
                <RedactedText key={skill.id} className="inline-block">
                  <span className="border border-border px-2 py-1 text-xs bg-muted/10">
                    {skill.name}
                  </span>
                </RedactedText>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
};