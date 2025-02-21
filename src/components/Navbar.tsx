"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Car, Wrench, Users, Bot } from "lucide-react";
import ThemeToggler from "./ThemeToggle";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const navigationItems = [
  { name: "Beranda", href: "/", icon: Home },
  { name: "Mobil", href: "/mobil", icon: Car },
  { name: "Layanan", href: "/layanan", icon: Wrench },
  { name: "Sales", href: "/sales", icon: Users },
  { name: "Mobil AI", href: "/rekomendasi-ai", icon: Bot },
];

export function Navigation() {
  const pathname = usePathname();

  // Add scroll to top effect on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };
  return (
    <>
      {/* Mobile Top Theme Toggler */}
      <div className="sm:hidden fixed top-1 right-1 z-50 bg-background/30 rounded-full backdrop-blur-lg">
        <ThemeToggler />
      </div>
      {/* Navbar untuk layar besar */}
      <nav className="hidden sm:flex sticky top-0 z-50 max-w-7xl mx-auto px-4 md:px-8 py-3 justify-between items-center bg-background/30 backdrop-blur-lg">
        <Link href={"/"}>
          <div className="flex flex-col">
            <Image alt="logo" width={110} height={5} src={"/images/logo.png"} />
            <span className="absolute text-[12px] ml-8 mt-3.5 opacity-80">
              Rantauprapat
            </span>
          </div>
        </Link>
        <div className="flex items-center space-x-6">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={handleNavigation}
              className={`text-md hover:text-primary transition-colors ${
                isActive(item.href) ? "text-red-500" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggler />
        </div>
      </nav>
      {/* Mobile Bottom Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 w-full bg-background/30 backdrop-blur-lg shadow-lg sm:hidden z-40"
      >
        <div className="flex justify-around items-center py-2 px-1">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={index}
                href={item.href}
                onClick={handleNavigation}
                className="relative group flex flex-col items-center justify-center w-16"
              >
                <motion.div
                  className="relative"
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`
                    p-2 rounded-xl transition-all duration-200
                    ${active ? "bg-red-500/10" : "group-hover:bg-red-500/5"}
                  `}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-200 ${
                        active
                          ? "text-red-500"
                          : "text-primary group-hover:text-red-500"
                      }`}
                    />
                  </div>
                </motion.div>

                <span
                  className={`text-xs transition-all duration-200 ${
                    active ? "text-red-500" : "text-primary"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Padding for fixed elements */}
      <div className="sm:hidden h-16" />
    </>
  );
}
