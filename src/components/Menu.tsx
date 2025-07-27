import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Star, Flame } from "lucide-react";
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

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu = ({ onAddToCart }: MenuProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { categories, menuItems } = restaurantData;

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const renderSpicyLevel = (level: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Flame 
        key={i} 
        size={12} 
        className={i < level ? "text-red-500" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our delicious selection of freshly prepared dishes, crafted with love and the finest ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className={selectedCategory === "all" ? "bg-gradient-primary" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
          >
            All Items
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${selectedCategory === category.id ? category.color : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"} flex items-center space-x-2`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {item.popular && (
                    <Badge className="bg-accent text-accent-foreground flex items-center space-x-1">
                      <Star size={12} />
                      <span>Popular</span>
                    </Badge>
                  )}
                  {item.vegetarian && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      🌱 Vegetarian
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1 text-lg font-bold text-primary">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center justify-between">
                  {item.name}
                  {item.spicyLevel > 0 && (
                    <div className="flex items-center space-x-1">
                      {renderSpicyLevel(item.spicyLevel)}
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => onAddToCart(item)}
                >
                  <Plus size={18} />
                  <span>Add to Cart</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;