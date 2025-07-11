"use client";

import { useState } from "react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Korrektor.az necə işləyir?",
      answer:
        "Korrektor.az süni intellekt əsaslı alqoritmlər istifadə edələrək mətninizdəki orfoqrafiya, qrammatika və üslub xətalarını aşkarlayır və düzəliş təklifləri verir.",
    },
    {
      question: "Pulsuz versiyada nə qədər mətn təhlil edə bilərəm?",
      answer:
        "Pulsuz versiyada gündə 3 dəfə, hər dəfə 500 simvola qədər mətn təhlil edə bilərsiniz. Pro versiyada heç bir limit yoxdur.",
    },
    {
      question: "Məlumatlarımın təhlükəsizliyi təmin edilirmi?",
      answer:
        "Bəli, bütün mətnləriniz SSL şifrələmə ilə qorunur və serverlərimizdə saxlanılmır. Təhlildən sonra mətnlər avtomatik silinir.",
    },
    {
      question: "Pro versiyada hansı əlavə funksiyalar var?",
      answer:
        "Pro versiyada limitsiz təhlil, təkmil üslub təklifləri, ton seçimi, detallı analitika, API girişi və prioritet dəstək mövcuddur.",
    },
    {
      question: "Mobil cihazlarda istifadə edə bilərəmmi?",
      answer:
        "Bəli, Korrektor.az bütün cihazlarda - kompüter, tablet və mobil telefonlarda rahat istifadə edilə bilər.",
    },
    {
      question: "Texniki dəstək necə əldə edə bilərəm?",
      answer:
        "Əlaqə formu vasitəsilə bizə müraciət edə bilərsiniz. Pro istifadəçilər üçün prioritet dəstək xidməti mövcuddur.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tez-tez Verilən Suallar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ən çox maraq göstərilən suallar və cavabları
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition font-medium text-gray-800 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-5 pt-2 text-gray-700 text-sm leading-relaxed bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
