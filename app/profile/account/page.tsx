"use client";
import { useState } from "react";
import {
  User2,
  Mail,
  Crown,
  ShieldCheck,
  CheckCircle2,
  LogOut,
  Pencil,
  Save,
} from "lucide-react";

export default function AccountPage() {
  const [user, setUser] = useState({
    first_name: "Allahverdi",
    last_name:"Garibov",
    email: "allahverdi@example.com",
    username: "aqaribov",
    plan: "Premium",
    planExpire: "2025-01-01",
  });


  // Ekstra state'ler
const [showPasswordForm, setShowPasswordForm] = useState(false);
const [currentPassword, setCurrentPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [passwordError, setPasswordError] = useState("");

  const [editField, setEditField] = useState<null | keyof typeof user>(null);
  const [tempValue, setTempValue] = useState("");

  const startEdit = (field: keyof typeof user) => {
    setEditField(field);
    setTempValue(user[field]);
  };

  const saveEdit = () => {
    if (editField) {
      setUser((prev) => ({ ...prev, [editField]: tempValue }));
      setEditField(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-10">
      <h1 className="text-3xl font-bold mb-4">Hesab Paneli</h1>

      {/* Profil Bilgileri */}
      <div className="bg-white shadow-sm border rounded-2xl p-6 space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
          <User2 className="w-5 h-5 text-gray-500" />
          İstifadəçi məlumatları
        </h2>

        {(["first_name", "last_name", "email", "username"] as const).map((field) => (
          <div
            key={field}
            className="flex justify-between items-center border-b border-gray-100 pb-4"
          >
            <div>
              <label className="text-sm text-gray-500 capitalize">
                {field === "first_name"
                  ? "Ad"
                  : field === "last_name"
                  ? "Soyad"
                  : field === "email"
                  ? "E-poçt"
                  : "İstifadəçi adı"}
              </label>
              {editField === field ? (
                <input
                  type="text"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="block mt-1 text-base text-gray-800 bg-gray-50 border border-gray-200 rounded-md px-3 py-1 w-full"
                />
              ) : (
                <p className="text-base text-gray-800 font-medium mt-1">
                  {user[field]}
                </p>
              )}
            </div>

            {editField === field ? (
              <button
                onClick={saveEdit}
                className="text-green-600 hover:underline flex items-center gap-1"
              >
                <Save className="w-4 h-4" />
                Yadda saxla
              </button>
            ) : (
              <button
                onClick={() => startEdit(field)}
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <Pencil className="w-4 h-4" />
                Dəyiş
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Plan Bölümü */}
      <div className="bg-white shadow-sm border rounded-2xl p-6 space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
          <Crown className="w-5 h-5 text-yellow-500" />
          Abunəlik Planı
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-medium text-gray-800">{user.plan}</p>
            <p className="text-sm text-gray-500">Bitmə tarixi: {user.planExpire}</p>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Planı dəyiş
          </button>
        </div>
      </div>

      {/* Təhlükəsizlik */}
      <div className="bg-white shadow-sm border rounded-2xl p-6 space-y-6">
  <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
    <ShieldCheck className="w-5 h-5 text-green-600" />
    Təhlükəsizlik
  </h2>

  {!showPasswordForm ? (
    <button
      className="text-sm text-indigo-600 hover:underline text-left"
      onClick={() => setShowPasswordForm(true)}
    >
      Şifrəni dəyiş
    </button>
  ) : (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
          setPasswordError("Yeni şifrə ilə təkrarı uyğun gəlmir.");
          return;
        }

        // Burada şifrə update API çağırışını edəcəksən
        console.log("Şifrə yeniləndi:", { currentPassword, newPassword });

        // Sıfırla
        setPasswordError("");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setShowPasswordForm(false);
      }}
    >
      <div>
        <label className="block text-sm text-gray-500">Cari şifrə</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-500">Yeni şifrə</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-500">Yeni şifrəni təkrar et</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {passwordError && (
        <p className="text-sm text-red-500">{passwordError}</p>
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Şifrəni yenilə
        </button>
        <button
          type="button"
          onClick={() => {
            setShowPasswordForm(false);
            setPasswordError("");
          }}
          className="text-sm text-gray-500 hover:underline"
        >
          Ləğv et
        </button>
      </div>
    </form>
  )}

  <button className="text-sm text-red-600 hover:underline text-left flex items-center gap-1">
    <LogOut className="w-4 h-4" />
    Hesabdan çıxış et
  </button>
</div>
      {/* Hesab Statusu */}
      <div className="flex items-center text-green-600 text-sm gap-2 mt-6">
        <CheckCircle2 className="w-5 h-5" />
        Hesabınız aktivdir və qorunur.
      </div>
    </div>
  );
}
