"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Burada formu API'ye göndərə bilərsiniz
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bizimlə Əlaqə
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sualınız var? Bizə yazın, ən qısa müddətdə cavab verəcəyik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Sol tərəf: şəkil və məlumatlar */}
          <div className="space-y-8">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                alt="Korrektor.az komandası"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-red-500" />,
                  title: "E-poçt",
                  text: "info@korrektor.az",
                },
                {
                  icon: <Phone className="h-6 w-6 text-red-500" />,
                  title: "Telefon",
                  text: "+994 12 345 67 89",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-red-500" />,
                  title: "Ünvan",
                  text: "Bakı şəhəri, Azərbaycan",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ tərəf: əlaqə formu */}
          <div className="bg-white shadow-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Mesaj Göndər
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınızı daxil edin"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    E-poçt
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e-poçt@example.com"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Mövzu</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Mesajın mövzusu"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Mesaj</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mesajınızı burada yazın..."
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Mesaj Göndər
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
