"use client"
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

import MobileMenu from './MobileMenu';

const Navbar = () => {
  const pathname = usePathname()


  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo  */}
        <div className="text-xl font-semibold">
          <Link href="/">Daily News</Link>
        </div>
        {/* desktok menu  */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/news" className={`hover:text-red-500 ${pathname === "/news" ? "text-red-500 font-semibold":""}`}>
                News
              </NavigationMenuLink>
              <NavigationMenuTrigger>
                 <Link href="/services" className="text-gray-700">
                  Services
                </Link>
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2 ">
                  <li>
                    <NavigationMenuLink href="/services/web">
                      Web Development
                    </NavigationMenuLink>
                  </li>
                  <li>
                    {" "}
                    <NavigationMenuLink href="/services/app">
                      App Development
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/seo">
                      Seo
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
              <NavigationMenuLink href="/about" className={`hover:text-red-500 ${pathname === "/about" ? "text-red-500 font-semibold":""}`}>
                About
              </NavigationMenuLink>
              <NavigationMenuLink href="/contact" className={`hover:text-red-500 ${pathname === "/contact" ? "text-red-500 font-semibold":""}`}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* color choese and login button  */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
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
