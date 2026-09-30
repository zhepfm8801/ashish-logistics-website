import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  isDark?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  centered = true,
  isDark = false,
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 animate-fade-in`}>
      {label && (
        <p
          className={`text-sm font-semibold tracking-widest uppercase mb-2 ${
            isDark ? 'text-accent' : 'text-accent'
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-heading ${
          isDark ? 'text-white' : 'text-primary-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${
            isDark ? 'text-gray-300' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
