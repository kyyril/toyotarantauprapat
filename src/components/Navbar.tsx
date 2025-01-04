"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import ThemeToggler from "./ThemeToggle";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

export const navigationItems = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Promo",
    href: "/promo",
  },
  {
    name: "Mobil",
    href: "/mobil",
  },
  {
    name: "Layanan",
    href: "/layanan",
  },
];

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 max-w-7xl mx-auto px-4 md:px-8 py-3 grid grid-cols-12 outline-none border-none backdrop-blur-sm bg-primary-foreground/0.5">
      <div className="col-span-6 flex md:col-span-3">
        <Link href={"/"}>
          <div className="flex flex-col">
            <Image alt="logo" width={110} height={5} src={"/images/logo.png"} />
            <span className="absolute text-[12px] ml-8 mt-3.5 opacity-80">
              Rantauprapat
            </span>
          </div>
        </Link>
      </div>
      <div className="hidden sm:flex justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={pathname === item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <ThemeToggler />
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-end md:col-span-3 col-span-6">
        <div className="sm:hidden">
          <ThemeToggler />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
