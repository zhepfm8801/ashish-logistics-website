import React from 'react';
import { LucideIcon } from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onLearnMore?: () => void;
  isDark?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  onLearnMore,
  isDark = false,
}) => {
  return (
    <div
      className={`rounded-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group ${
        isDark
          ? 'bg-white/10 hover:bg-white/20 border border-white/10'
          : 'bg-white border border-light hover:border-accent'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`p-3 rounded-lg ${
            isDark
              ? 'bg-accent/20 text-accent'
              : 'bg-accent/10 text-accent'
          }} group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300`}
        >
          <Icon size={24} />
        </div>
      </div>
      <h3
        className={`text-xl font-bold mb-3 font-heading ${
          isDark ? 'text-white' : 'text-primary-900'
        }`}
      >
        {title}
      </h3>
      <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-muted'}`}>
        {description}
      </p>
      {onLearnMore && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onLearnMore}
          className={isDark ? 'text-accent' : ''}
        >
          Learn More →
        </Button>
      )}
    </div>
  );
};

export default ServiceCard;
