import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import restaurantData from "@/data/restaurantData.json";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { restaurant } = restaurantData;

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl">{restaurant.logo}</span>
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {restaurant.name}
            </h1>
            <p className="text-sm text-muted-foreground hidden sm:block">
              {restaurant.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <a 
            href={`tel:${restaurant.contact.phone}`}
            className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Phone size={18} />
            <span className="font-medium">{restaurant.contact.phone}</span>
          </a>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onCartClick}
            className="relative border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ShoppingCart size={18} className="mr-2" />
            Cart
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <a 
                  href={`tel:${restaurant.contact.phone}`}
                  className="flex items-center space-x-2 text-primary"
                >
                  <Phone size={18} />
                  <span>{restaurant.contact.phone}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;