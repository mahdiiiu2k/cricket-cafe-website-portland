
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  notes?: string;
}

const Order = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const { toast } = useToast();

  const menuItems = [
    {
      id: "1",
      name: "Famous Buttermilk Pancakes",
      price: 12.95,
      category: "Pancakes",
      description: "Three fluffy pancakes with maple syrup and berries"
    },
    {
      id: "2",
      name: "Classic Eggs Benedict",
      price: 16.95,
      category: "Eggs",
      description: "Poached eggs with Canadian bacon and hollandaise"
    },
    {
      id: "3",
      name: "Portland Blend Coffee",
      price: 4.50,
      category: "Beverages",
      description: "Our signature locally roasted coffee blend"
    },
    {
      id: "4",
      name: "Veggie Scramble",
      price: 13.95,
      category: "Eggs",
      description: "Three eggs with seasonal vegetables and goat cheese"
    },
    {
      id: "5",
      name: "Avocado Toast",
      price: 10.95,
      category: "Toast",
      description: "Multigrain toast with smashed avocado and tomatoes"
    }
  ];

  const timeSlots = [
    "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM"
  ];

  const addToCart = (item: any) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your order.`,
    });
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      });
      return;
    }

    if (!selectedTime) {
      toast({
        title: "Select pickup time",
        description: "Please select a pickup time for your order.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Order placed successfully!",
      description: `Your order will be ready for pickup at ${selectedTime}. We'll send you a confirmation email shortly.`,
    });

    // Reset cart
    setCart([]);
    setSelectedTime("");
  };

  return (
    <div className="min-h-screen bg-breakfast-yellow-50">
      {/* Header */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-coffee-brown-800 mb-4">
            Order Online
          </h1>
          <p className="text-xl text-coffee-brown-600 max-w-2xl mx-auto">
            Skip the wait! Order ahead for pickup and enjoy your favorite breakfast dishes fresh and hot.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-coffee-brown-800 mb-6">
              Select Your Items
            </h2>
            
            <div className="space-y-4">
              {menuItems.map((item) => (
                <Card key={item.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-serif text-lg font-semibold text-coffee-brown-800">
                            {item.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                        <p className="text-coffee-brown-600 text-sm mb-3">
                          {item.description}
                        </p>
                        <span className="font-bold text-xl text-coffee-brown-800">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <Button 
                        onClick={() => addToCart(item)}
                        className="bg-coffee-brown-600 hover:bg-coffee-brown-700 ml-4"
                      >
                        <Plus size={16} className="mr-1" />
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cart & Checkout */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Cart */}
              <Card className="border-0 shadow-lg mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart size={20} />
                    Your Order ({cart.length} items)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {cart.length === 0 ? (
                    <p className="text-coffee-brown-600 text-center py-8">
                      Your cart is empty. Add some delicious items!
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-coffee-brown-800 text-sm">
                              {item.name}
                            </h4>
                            <p className="text-coffee-brown-600 text-xs">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus size={12} />
                            </Button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus size={12} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-800"
                            >
                              <Trash2 size={12} />
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-coffee-brown-800">
                          ${getTotalPrice().toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Pickup Time */}
              <Card className="border-0 shadow-lg mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock size={20} />
                    Pickup Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className={selectedTime === time 
                          ? "bg-coffee-brown-600 hover:bg-coffee-brown-700" 
                          : "border-coffee-brown-300 text-coffee-brown-600 hover:bg-coffee-brown-50"
                        }
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 bg-breakfast-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-coffee-brown-700">
                      <Calendar size={16} />
                      <span>Today's Hours: 8:00 AM - 1:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Checkout Button */}
              <Button 
                onClick={handleCheckout}
                className="w-full bg-portland-green-600 hover:bg-portland-green-700 text-white font-semibold py-3 text-lg"
                size="lg"
              >
                Place Order - ${getTotalPrice().toFixed(2)}
              </Button>

              <p className="text-xs text-coffee-brown-600 text-center mt-4">
                You'll receive an email confirmation with pickup instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
