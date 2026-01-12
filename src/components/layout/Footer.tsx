import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-background">Kim Long Restaurants</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Experience authentic Chinese cuisine in the heart of Chicago. 
              Family-owned and serving the community with passion since day one.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-background/80 text-sm">
                  5114 W Fullerton Ave<br />
                  Chicago, IL
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:7732377554"
                  className="text-background/80 text-sm hover:text-secondary transition-colors"
                >
                  (773) 237-7554
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
                  <p>Sat - Sun: 12:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-background/80 text-sm hover:text-secondary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-background/80 text-sm hover:text-secondary transition-colors"
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="text-background/80 text-sm hover:text-secondary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-background/80 text-sm hover:text-secondary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © {currentYear} Kim Long Restaurants. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-secondary"></span>
              <span className="text-background/70 text-sm">Dine-In</span>
              <span className="h-1 w-1 rounded-full bg-secondary"></span>
              <span className="text-background/70 text-sm">Takeout</span>
              <span className="h-1 w-1 rounded-full bg-secondary"></span>
              <span className="text-background/70 text-sm">Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;