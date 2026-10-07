import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';



export const Breadcrumbs = ({ items }) => {
  const { t } = useLanguage();

  return (
    <nav 
      className="flex items-center text-xs sm:text-sm text-stone-500 py-3 overflow-x-auto whitespace-nowrap" 
      aria-label="Breadcrumb"
    >
  
      <Link 
        to="/" 
        className="flex items-center gap-1.5 hover:text-[#9A3412] transition-colors shrink-0 font-medium"
      >
        <Home className="w-3.5 h-3.5 text-stone-400" />
        <span>{t.home}</span>
      </Link>
     
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-stone-300 mx-2 shrink-0" />
            
            {item.to && !isLastItem ? (
              <Link 
                to={item.to} 
                className="flex items-center gap-1.5 hover:text-[#9A3412] transition-colors shrink-0 font-medium"
              >
                {item.flag && <span>{item.flag}</span>}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className="text-stone-800 font-semibold truncate shrink-0 max-w-50 sm:max-w-xs md:max-w-md">
                {item.flag && <span className="mr-1.5">{item.flag}</span>}
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
