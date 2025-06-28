
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/order", label: "Order Online" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-coffee-brown-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-coffee-brown-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-serif text-xl font-bold text-coffee-brown-800">
              Cricket Cafe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-coffee-brown-600 ${
                  isActive(item.path)
                    ? "text-coffee-brown-600 border-b-2 border-coffee-brown-600"
                    : "text-coffee-brown-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Phone Number & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+15035551234"
              className="hidden sm:flex items-center space-x-2 text-coffee-brown-700 hover:text-coffee-brown-600 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">(503) 555-1234</span>
            </a>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? "bg-coffee-brown-100 text-coffee-brown-800"
                          : "text-coffee-brown-700 hover:bg-coffee-brown-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t pt-4">
                    <a
                      href="tel:+15035551234"
                      className="flex items-center space-x-2 text-coffee-brown-700 py-2 px-4"
                    >
                      <Phone size={16} />
                      <span>(503) 555-1234</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
