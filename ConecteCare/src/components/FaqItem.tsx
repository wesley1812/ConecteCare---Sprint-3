import React from 'react';
import type { FAQItemProps } from '../types/interfaces';


const FaqItem = ({ item, isOpen, onToggle }: FAQItemProps) => {
  console.log("Renderizando FaqItem:", item.question);
  
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={onToggle}
        className="bg-white w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50 focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="bg-white px-6 pb-4">
          <p className="text-gray-700">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(FaqItem);