import React, { useState } from 'react';
import { Clock, Sparkles, Bell, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export const ComingSoonState = ({ 
  country, 
  currentCount, 
  targetCount = 12 
}) => {
  const { t, language, getCountryDetails, getCourseLabel } = useLanguage();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const remaining = Math.max(0, targetCount - currentCount);
  const countryDetails = getCountryDetails(country.id, country);

  
  const previewDishes = [
    {
      title: language === 'ka' ? 'კარნიარიკი (გამოტენილი ბადრიჯანი)' : 'Karnıyarık (Stuffed Eggplants)',
      course: 'Main',
      tag: language === 'ka' ? 'ოსმალური მემკვიდრეობა' : 'Ottoman Heritage',
      description: language === 'ka' 
        ? 'შემწვარი ბადრიჯანი სანელებლებით შეზავებული ფარშით, ხახვით, ნივრით, ოხრახუშით და პომიდვრის სოუსით.'
        : 'Pan-roasted eggplants stuffed with spiced minced meat, onions, garlic, parsley, and baked in rich tomato sauce.'
    },
    {
      title: language === 'ka' ? 'შავი ზღვის ფიდე (ყველიანი ნავი)' : 'Karadeniz Pidesi (Black Sea Cheese Boat)',
      course: 'Bakery',
      tag: language === 'ka' ? 'შეშის ღუმელი' : 'Wood-Fired',
      description: language === 'ka'
        ? 'ხრაშუნა ნავის ფორმის ცომი გამდნარი ყველით, კვერცხის გულითა და კარაქით.'
        : 'Crisp boat-shaped flatbread filled with melting Kolot cheese and topped with raw egg yolk and butter.'
    },
    {
      title: language === 'ka' ? 'ჰუნქარ ბეიენდი („სულთნის სიამოვნება“)' : 'Hünkar Beğendi ("The Sultan Pleased")',
      course: 'Main',
      tag: language === 'ka' ? 'სამეფო კლასიკა' : 'Imperial Palace',
      description: language === 'ka'
        ? 'ნელ-ნელა მოთუშული ბატკნის ხორცი შებოლილი ბადრიჯნის ბეშამელის ნაზ პიურეზე.'
        : 'Slow-braised spiced lamb cubes served over a silky bed of charcoal-smoked eggplant béchamel purée.'
    },
    {
      title: language === 'ka' ? 'სუ ბორექი (ტრადიციული წყლის ბორეკი)' : 'Su Böreği (Traditional Water Burek)',
      course: 'Bakery',
      tag: language === 'ka' ? 'ხელნაკეთი ფენოვანი' : 'Artisanal Lamination',
      description: language === 'ka'
        ? 'მოხარშული ცომის თხელი ფენები ცხვრის თეთრი ყველით, კარაქითა და მწვანილით.'
        : 'Hand-rolled yufka pastry sheets boiled in salted water, layered with sheep white cheese, butter, and parsley.'
    }
  ].slice(0, remaining);

  const statusLabel = language === 'ka' ? 'მზადდება' : 'Testing';

  return (
    <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#9A3412]/5 via-[#FAF7F2] to-amber-50/40 border-2 border-dashed border-[#9A3412]/30 p-6 sm:p-10 text-stone-800 shadow-sm" id="coming-soon-banner">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9A3412] text-white font-bold text-xs shadow-md shadow-[#9A3412]/20">
          <span>{t.comingSoon} ⏳</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <span className="text-amber-100 font-normal">{t.catalogInProgress}</span>
        </div>

        <h3 className="font-serif-display font-bold text-2xl sm:text-3xl text-stone-900">
          {countryDetails.name} — {t.comingSoon}
        </h3>

        <p className="text-sm text-stone-600 leading-relaxed max-w-xl mx-auto">
          {currentCount} / {targetCount} {t.dishesCount}. {t.remainingDishesPrep.replace('{remaining}', remaining.toString())}
        </p>

        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={() => setIsSubscribed(true)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-sm ${
              isSubscribed
                ? 'bg-[#9A3412] text-white shadow-[#9A3412]/20'
                : 'bg-stone-900 hover:bg-[#9A3412] text-white'
            }`}
          >
            {isSubscribed ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t.notifiedSuccess}</span>
              </>
            ) : (
              <>
                <Bell className="w-4 h-4 text-amber-300" />
                <span>{t.notifyMe}</span>
              </>
            )}
          </button>
        </div>

      </div>

     
      {previewDishes.length > 0 && (
        <div className="mt-8 pt-8 border-t border-[#D6C7B2]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#9A3412]" />
              {t.inTestKitchen} ({previewDishes.length} {t.upcomingDishes}):
            </span>
            <span className="text-xs text-stone-500 font-medium">{t.releasingSoon}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {previewDishes.map((dish, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-[#D6C7B2] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-950">
                      {getCourseLabel(dish.course)}
                    </span>
                    <span className="text-[10px] text-stone-400 font-medium">
                      {statusLabel} 🧪
                    </span>
                  </div>
                  <h4 className="font-serif-display font-bold text-sm text-stone-900 leading-snug">
                    {dish.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-3 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="font-medium text-[#9A3412]">{dish.tag}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{t.releasingSoon}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
