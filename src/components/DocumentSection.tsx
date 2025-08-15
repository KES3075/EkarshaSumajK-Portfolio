import { RedactedText, ClassifiedStamp } from './RedactedText';

interface DocumentSectionProps {
  title: string;
  children: React.ReactNode;
  classified?: boolean;
  className?: string;
}

export const DocumentSection = ({ title, children, classified = true, className = "" }: DocumentSectionProps) => {
  return (
    <section className={`mb-8 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-header">{title}</h2>
        {classified && <ClassifiedStamp />}
      </div>
      <div className="border border-border p-4 bg-card">
        {children}
      </div>
    </section>
  );
};

export const FormField = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <div className="flex items-center mb-2">
      <span className="w-32 font-semibold uppercase text-xs tracking-wide">{label}:</span>
      <div className="form-field flex-1 min-h-[1.5rem] flex items-center">
        {children}
      </div>
    </div>
  );
};