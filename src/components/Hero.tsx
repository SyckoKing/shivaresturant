import { Button } from "@/components/ui/button";
import { ArrowDown, Clock, DollarSign, Star } from "lucide-react";
import restaurantData from "@/data/restaurantData.json";

const Hero = () => {
  const { restaurant } = restaurantData;

  const scrollToMenu = () => {
    const element = document.querySelector("#menu");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${restaurant.heroImage})`,
          filter: 'brightness(0.3)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <div className="text-6xl mb-6">{restaurant.logo}</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {restaurant.name}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-4">
            {restaurant.tagline}
          </p>
          <p className="text-lg text-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {restaurant.description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              onClick={scrollToMenu}
            >
              Order Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              View Menu
            </Button>
          </div>

          {/* Delivery Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
              <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">{restaurant.deliveryInfo.estimatedTime}</p>
              <p className="text-sm text-muted-foreground">Delivery Time</p>
            </div>
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
              <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">
                {restaurant.deliveryInfo.freeDeliveryMinimum > 0 
                  ? `$${restaurant.deliveryInfo.freeDeliveryMinimum}+` 
                  : 'Always'
                }
              </p>
              <p className="text-sm text-muted-foreground">Free Delivery</p>
            </div>
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
              <Star className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">4.8/5</p>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
          </div>

          <button 
            onClick={scrollToMenu}
            className="text-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;