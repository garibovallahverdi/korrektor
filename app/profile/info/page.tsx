"use client";
import { useState } from "react";

export default function ProfileInfoPage() {
  const [formData, setFormData] = useState({
    name: "Mehmet Yılmaz",
    email: "mehmet@example.com",
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Kullanıcı Bilgileri</h1>

      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700">İsim</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">E-posta</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
}
