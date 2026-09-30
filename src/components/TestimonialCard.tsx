import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
  rating = 5,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-accent text-accent"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-text mb-6 italic leading-relaxed">"{ quote}"</p>
      <div>
        <p className="font-semibold text-primary-900">{author}</p>
        {location && (
          <p className="text-muted text-sm">{location}</p>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
