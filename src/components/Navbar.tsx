"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Car, Wrench, Users, Bot } from "lucide-react"; // Import icons
import ThemeToggler from "./ThemeToggle";
import Image from "next/image";

export const navigationItems = [
  { name: "Beranda", href: "/", icon: Home },
  { name: "Mobil", href: "/mobil", icon: Car },
  { name: "Layanan", href: "/layanan", icon: Wrench },
  { name: "Sales", href: "/sales", icon: Users },
  { name: "Mobil AI", href: "/rekomendasi-ai", icon: Bot },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Top Theme Toggler */}
      <div className="sm:hidden fixed top-0 right-0 z-50 bg-primary-foreground/50 rounded-full backdrop-blur-sm">
        <ThemeToggler />
      </div>
      {/* Navbar untuk layar besar */}
      <nav className="hidden sm:flex sticky top-0 z-50 max-w-7xl mx-auto px-4 md:px-8 py-3 justify-between items-center bg-primary-foreground/50 backdrop-blur-sm">
        <Link href={"/"}>
          <div className="flex flex-col">
            <Image alt="logo" width={110} height={5} src={"/images/logo.png"} />
            <span className="absolute text-[12px] ml-8 mt-3.5 opacity-80">
              Rantauprapat
            </span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-sm hover:text-primary transition-colors ${
                pathname === item.href ? "font-bold text-primary" : "opacity-75"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggler />
        </div>
      </nav>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-primary-foreground/50 backdrop-blur-sm shadow-md sm:hidden z-40">
        <div className="flex justify-around py-2">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="relative group flex flex-col items-center px-2 py-1 rounded-xl bg-secondary/75"
              >
                <Icon
                  className={`w-5 h-5 mb-0.5 transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-red-500"
                      : "group-hover:text-primary"
                  }`}
                />
                <span
                  className={`text-xs transition-all duration-200 ${
                    pathname === item.href ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                </span>

                {/* Hover tooltip */}
                <span className="absolute -top-8 scale-0 transition-all rounded bg-red-500/30 p-2 text-xs text-white group-hover:scale-100">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Add padding for mobile nav bars */}
      <div className="sm:hidden h-10" /> {/* Top padding for theme toggle */}
      <div className="pb-16 sm:pb-0" /> {/* Bottom padding for navigation */}
    </>
  );
}
