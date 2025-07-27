import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import restaurantData from "@/data/restaurantData.json";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const { restaurant } = restaurantData;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= restaurant.deliveryInfo.freeDeliveryMinimum ? 0 : restaurant.deliveryInfo.deliveryFee;
  const total = subtotal + deliveryFee;

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Order Placed Successfully!",
      description: `Your order of $${total.toFixed(2)} has been confirmed. Estimated delivery: ${restaurant.deliveryInfo.estimatedTime}`,
    });
    
    setIsProcessing(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Cart Sidebar */}
      <div className="relative ml-auto w-full max-w-md bg-background shadow-2xl">
        <Card className="h-full border-0 rounded-none">
          <CardHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6" />
                <span>Your Cart</span>
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X size={20} />
              </Button>
            </div>
            <p className="text-muted-foreground">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </p>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-0">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center p-6">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-4">Add some delicious items to get started</p>
                <Button onClick={onClose} className="bg-gradient-primary">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4 p-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-muted/50 rounded-lg p-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus size={14} />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>

          {cartItems.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                    {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                {subtotal < restaurant.deliveryInfo.freeDeliveryMinimum && (
                  <p className="text-xs text-muted-foreground">
                    Add ${(restaurant.deliveryInfo.freeDeliveryMinimum - subtotal).toFixed(2)} more for free delivery
                  </p>
                )}
                <div className="flex justify-between font-semibold text-lg border-t border-border pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Checkout"}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Estimated delivery: {restaurant.deliveryInfo.estimatedTime}
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Cart;