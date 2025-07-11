"use client";
import { useState } from "react";
import { User2, Mail, BadgeCheck, CheckCircle } from "lucide-react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    fullName: "Allahverdi Qəribov",
    email: "allahverdi@example.com",
    username: "aqaribov",
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSaved(true), 800);
  };

  return (
    <div className="max-w-2xl bg-white shadow rounded-xl p-6 border">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Hesab ayarları</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm text-gray-600">
            <User2 className="inline-block w-4 h-4 mr-1" />
            Tam ad
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-600">
            <Mail className="inline-block w-4 h-4 mr-1" />
            E-poçt
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-600">
            <BadgeCheck className="inline-block w-4 h-4 mr-1" />
            İstifadəçi adı
          </label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Yadda saxla
        </button>

        {isSaved && (
          <p className="mt-2 flex items-center text-green-600 text-sm">
            <CheckCircle className="w-4 h-4 mr-1" />
            Məlumatlar yadda saxlanıldı.
          </p>
        )}
      </form>
    </div>
  );
}
