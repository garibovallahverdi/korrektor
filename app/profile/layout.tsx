import { ReactNode } from "react";
import Link from "next/link";
import { Settings, User2, LogOut } from "lucide-react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen container mx-auto flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar */}
      <aside className="md:w-64 sticky top-20  h-full p-6 space-y-6 shadow-sm w-full">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Profil Paneli</h2>
        </div>

        <nav className="space-y-3 text-sm">

          <Link
            href="/profile/account"
            className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
          >
            <Settings className="w-4 h-4" />
            Hesab ayarları
          </Link>

          <button className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition mt-8">
            <LogOut className="w-4 h-4" />
            Çıxış et
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-">{children}</main>
    </div>
  );
}
