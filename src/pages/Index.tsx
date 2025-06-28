
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const getCurrentStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();
    
    // Mon-Fri 8am-1pm, Sat-Sun 8am-2pm
    if (day >= 1 && day <= 5) { // Monday to Friday
      return hour >= 8 && hour < 13 ? "Open" : "Closed";
    } else { // Saturday and Sunday
      return hour >= 8 && hour < 14 ? "Open" : "Closed";
    }
  };

  const isOpen = getCurrentStatus() === "Open";

  const handleNewsletterSignup = () => {
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated on our latest specials and events.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] hero-gradient flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1920&h=1080" 
            alt="Delicious breakfast spread at Cricket Cafe"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-coffee-brown-800 mb-6 animate-fade-in">
            Cricket Cafe
          </h1>
          <p className="text-xl md:text-2xl text-coffee-brown-700 mb-8 animate-fade-in">
            Portland's Cozy Breakfast Spot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button asChild size="lg" className="bg-coffee-brown-600 hover:bg-coffee-brown-700 text-white px-8 py-3">
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-coffee-brown-600 text-coffee-brown-600 hover:bg-coffee-brown-50 px-8 py-3">
              <Link to="/order">Order Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Status Banner */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-portland-green-500' : 'bg-red-500'} animate-pulse`}></div>
                <span className="font-medium text-coffee-brown-800">
                  Currently {isOpen ? "Open" : "Closed"}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-coffee-brown-600">
                <Clock size={16} />
                <span className="text-sm">Mon-Fri 8am-1pm | Sat-Sun 8am-2pm</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+15035551234" className="text-coffee-brown-600 hover:text-coffee-brown-800 transition-colors">
                <Phone size={16} />
              </a>
              <span className="text-coffee-brown-600">|</span>
              <div className="flex items-center space-x-1">
                <MapPin size={16} className="text-coffee-brown-600" />
                <span className="text-sm text-coffee-brown-600">123 SE Portland Street</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-breakfast-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-coffee-brown-800 mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-coffee-brown-600 text-lg max-w-2xl mx-auto">
              Handcrafted with love using locally sourced ingredients from Portland's finest suppliers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-lg">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&h=600" 
                  alt="Famous pancakes"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-semibold text-coffee-brown-800">
                    Famous Pancakes
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-breakfast-yellow-500 fill-current" />
                    <span className="text-sm text-coffee-brown-600">4.9</span>
                  </div>
                </div>
                <p className="text-coffee-brown-600 text-sm mb-4">
                  Fluffy buttermilk pancakes served with real maple syrup and fresh berries
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-coffee-brown-800">$12.95</span>
                  <span className="text-xs bg-portland-green-100 text-portland-green-800 px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=600&h=600" 
                  alt="Eggs Benedict"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-semibold text-coffee-brown-800">
                    Eggs Benedict
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-breakfast-yellow-500 fill-current" />
                    <span className="text-sm text-coffee-brown-600">4.8</span>
                  </div>
                </div>
                <p className="text-coffee-brown-600 text-sm mb-4">
                  Poached eggs on English muffins with Canadian bacon and hollandaise
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-coffee-brown-800">$16.95</span>
                  <span className="text-xs bg-breakfast-yellow-100 text-breakfast-yellow-800 px-2 py-1 rounded-full">
                    Chef's Choice
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&h=600" 
                  alt="Portland Blend Coffee"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-semibold text-coffee-brown-800">
                    Portland Blend
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-breakfast-yellow-500 fill-current" />
                    <span className="text-sm text-coffee-brown-600">4.9</span>
                  </div>
                </div>
                <p className="text-coffee-brown-600 text-sm mb-4">
                  Our signature coffee blend roasted locally by Stumptown Coffee
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-coffee-brown-800">$4.50</span>
                  <span className="text-xs bg-coffee-brown-100 text-coffee-brown-800 px-2 py-1 rounded-full">
                    Local Favorite
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-coffee-brown-800 mb-4">
              Why Portland Loves Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-portland-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-portland-green-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-coffee-brown-800 mb-2">
                Local Ingredients
              </h3>
              <p className="text-coffee-brown-600">
                We source our ingredients from local Portland farms and suppliers to ensure freshness and support our community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-breakfast-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-breakfast-yellow-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-coffee-brown-800 mb-2">
                Made Fresh Daily
              </h3>
              <p className="text-coffee-brown-600">
                Every dish is prepared fresh to order using traditional recipes passed down through generations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-coffee-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={24} className="text-coffee-brown-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-coffee-brown-800 mb-2">
                Award Winning
              </h3>
              <p className="text-coffee-brown-600">
                Voted "Best Breakfast in Portland" by Portland Monthly magazine three years running.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-coffee-brown-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-coffee-brown-800 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-coffee-brown-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest specials, events, and Portland breakfast news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-coffee-brown-200 focus:outline-none focus:ring-2 focus:ring-coffee-brown-500"
            />
            <Button 
              onClick={handleNewsletterSignup}
              className="bg-coffee-brown-600 hover:bg-coffee-brown-700 text-white px-6"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
