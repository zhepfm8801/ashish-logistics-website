import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-light rounded-lg overflow-hidden hover:border-accent transition-colors"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-light transition-colors text-left"
            aria-expanded={openId === item.id}
            aria-controls={`faq-content-${item.id}`}
          >
            <span className="font-semibold text-primary-900">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-accent transition-transform duration-300 ${
                openId === item.id ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          {openId === item.id && (
            <div
              id={`faq-content-${item.id}`}
              className="px-6 py-4 bg-light border-t border-light animate-slide-down"
            >
              <p className="text-muted leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
