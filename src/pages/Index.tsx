import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Cart from "@/components/Cart";
import restaurantData from "@/data/restaurantData.json";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
  vegetarian?: boolean;
  spicyLevel: number;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { restaurant } = restaurantData;

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: 1
        }];
      }
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Header 
        cartItemsCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <Hero />
      <Menu onAddToCart={addToCart} />
      <Features />
      <Contact />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-3xl">{restaurant.logo}</span>
                <div>
                  <h3 className="text-xl font-bold">{restaurant.name}</h3>
                  <p className="text-sm opacity-80">{restaurant.tagline}</p>
                </div>
              </div>
              <p className="text-sm opacity-80">
                {restaurant.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#home" className="block hover:text-secondary transition-colors">Home</a>
                <a href="#menu" className="block hover:text-secondary transition-colors">Menu</a>
                <a href="#about" className="block hover:text-secondary transition-colors">About</a>
                <a href="#contact" className="block hover:text-secondary transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <p>{restaurant.contact.phone}</p>
                <p>{restaurant.contact.email}</p>
                <p>{restaurant.contact.address}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Delivery Info</h4>
              <div className="space-y-2 text-sm">
                <p>Delivery Time: {restaurant.deliveryInfo.estimatedTime}</p>
                <p>Free delivery over ${restaurant.deliveryInfo.freeDeliveryMinimum}</p>
                <p>Delivery fee: ${restaurant.deliveryInfo.deliveryFee}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">
              © 2024 {restaurant.name}. All rights reserved. Made with ❤️ for food lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;