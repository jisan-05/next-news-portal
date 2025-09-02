"use client"
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

import MobileMenu from './MobileMenu';
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const pathname = usePathname()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {isDarkMode,toggleTheme} : any = useContext(ThemeContext)

  return (
    <header className={`py-4 shadow-md ${isDarkMode? "bg-gray-900 text-white " : ""}`}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo  */}
        <div className="text-xl font-semibold">
          <Link href="/">Daily News</Link>
        </div>
        {/* desktok menu  */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <Link href="/news" className={`hover:text-red-500 ${pathname === "/news" ? "text-red-500 font-semibold":""}`}>
                News
              </Link>
              <NavigationMenuTrigger className="dark:bg-slate-900 dark:text-white">
                 Services
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className=" shadow-md rounded-md px-5 py-4 space-y-2 ">
                  <li>
                    <Link href="/services/web">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/services/app">
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seo">
                      Seo
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
              <Link href="/about" className={`hover:text-red-500 ${pathname === "/about" ? "text-red-500 font-semibold":""}`}>
                About
              </Link>
              <Link href="/contact" className={`hover:text-red-500 ${pathname === "/contact" ? "text-red-500 font-semibold":""}`}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* color choese and login button  */}
        <div className="hidden lg:flex items-center space-x-4">
          <div onClick={toggleTheme} className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch></Switch>
          </div>
          <Button variant="default">Login</Button>
        </div>
        {/* Mobile hamber menu  */}
        <MobileMenu></MobileMenu>
      </nav>
    </header>
  );
};

export default Navbar;
