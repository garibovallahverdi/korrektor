
import { CheckCircle, Crown } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Pulsuz",
      description: "Başlayanlar üçün əsas funksiyalar",
      features: [
        "500 simvola qədər mətn təhlili",
        "Əsas orfoqrafiya yoxlaması",
        "Sadə qrammatika təhlili",
        "3 dəfə günlük istifadə limiti"
      ],
      buttonText: "Qeydiyyatdan keç",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "9.99₼/ay",
      description: "Peşəkar istifadəçilər üçün tam funksional",
      features: [
        "Limitsiz mətn təhlili",
        "Təkmil orfoqrafiya və qrammatika",
        "Üslub və ton təkmilləşdirməsi",
        "Detallı hesabat və statistika",
        "Prioritet dəstək",
        "API girişi"
      ],
      buttonText: "Pro al",
      buttonVariant: "default" as const,
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tarif Planları
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ehtiyacınıza uyğun planı seçin və dərhal istifadəyə başlayın
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative hover:shadow-lg transition-all duration-300 rounded-lg border bg-card text-card-foreground shadow-sm ${
                plan.popular ? 'border-red-500 shadow-lg scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Crown className="h-4 w-4" />
                    Populyar
                  </div>
                </div>
              )}
              
              <div className="text-center pb-4 flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-bold text-gray-900 leading-none tracking-tight">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-red-500 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>
              
              <div className="space-y-6 p-6 pt-0">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 ${
                    plan.buttonVariant === 'default' 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'border-red-500 text-red-500 hover:bg-red-50'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
