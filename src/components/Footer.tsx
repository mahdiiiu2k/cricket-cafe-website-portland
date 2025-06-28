
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portland-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-breakfast-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-portland-green-800 font-bold">C</span>
              </div>
              <span className="font-serif text-lg font-bold">Cricket Cafe</span>
            </div>
            <p className="text-portland-green-200 text-sm leading-relaxed">
              Portland's cozy breakfast spot serving delicious morning meals with locally sourced ingredients since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-portland-green-200 hover:text-breakfast-yellow-400 transition-colors text-sm">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-portland-green-200 hover:text-breakfast-yellow-400 transition-colors text-sm">
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-portland-green-200 hover:text-breakfast-yellow-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-portland-green-200 hover:text-breakfast-yellow-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-breakfast-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-portland-green-200">
                  <p>123 SE Portland Street</p>
                  <p>Portland, OR 97202</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-breakfast-yellow-400" />
                <a href="tel:+15035551234" className="text-sm text-portland-green-200 hover:text-breakfast-yellow-400 transition-colors">
                  (503) 555-1234
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-breakfast-yellow-400" />
                <div className="text-sm text-portland-green-200">
                  <p>Mon-Fri: 8am-1pm</p>
                  <p>Sat-Sun: 8am-2pm</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-portland-green-200 hover:text-breakfast-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-portland-green-200 hover:text-breakfast-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-portland-green-700 mt-8 pt-8 text-center">
          <p className="text-portland-green-300 text-sm">
            © 2024 Cricket Cafe. All rights reserved. Made with ❤️ in Portland, Oregon.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
