
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  dietary: string[];
  popular?: boolean;
  image: string;
  rating: number;
}

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDietary, setSelectedDietary] = useState("all");

  const menuItems: MenuItem[] = [
    {
      id: "1",
      name: "Famous Buttermilk Pancakes",
      description: "Three fluffy pancakes served with real maple syrup, whipped butter, and seasonal berries",
      price: 12.95,
      category: "pancakes",
      dietary: ["V"],
      popular: true,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&h=400",
      rating: 4.9
    },
    {
      id: "2",
      name: "Classic Eggs Benedict",
      description: "Poached eggs on toasted English muffins with Canadian bacon and hollandaise sauce",
      price: 16.95,
      category: "eggs",
      dietary: [],
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=600&h=400",
      rating: 4.8
    },
    {
      id: "3",
      name: "Portland Blend Coffee",
      description: "Our signature blend roasted locally by Stumptown Coffee Roasters",
      price: 4.50,
      category: "beverages",
      dietary: ["V", "GF"],
      popular: true,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&h=400",
      rating: 4.9
    },
    {
      id: "4",
      name: "Veggie Scramble",
      description: "Three eggs scrambled with seasonal vegetables, spinach, mushrooms, and goat cheese",
      price: 13.95,
      category: "eggs",
      dietary: ["V", "GF"],
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&h=400",
      rating: 4.7
    },
    {
      id: "5",
      name: "Blueberry French Toast",
      description: "Thick-cut brioche soaked in vanilla custard, topped with fresh blueberries and powdered sugar",
      price: 14.95,
      category: "french-toast",
      dietary: ["V"],
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&h=400",
      rating: 4.8
    },
    {
      id: "6",
      name: "Avocado Toast",
      description: "Multigrain toast topped with smashed avocado, cherry tomatoes, and everything seasoning",
      price: 10.95,
      category: "toast",
      dietary: ["V", "GF"],
      popular: true,
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=600&h=400",
      rating: 4.6
    }
  ];

  const categories = [
    { id: "all", name: "All Items" },
    { id: "pancakes", name: "Pancakes" },
    { id: "eggs", name: "Eggs & Omelettes" },
    { id: "french-toast", name: "French Toast" },
    { id: "toast", name: "Toast & Sandwiches" },
    { id: "beverages", name: "Beverages" }
  ];

  const dietaryFilters = [
    { id: "all", name: "All" },
    { id: "V", name: "Vegetarian" },
    { id: "GF", name: "Gluten Free" }
  ];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
    const dietaryMatch = selectedDietary === "all" || item.dietary.includes(selectedDietary);
    return categoryMatch && dietaryMatch;
  });

  const getDietaryBadge = (dietary: string) => {
    const colors = {
      "V": "bg-portland-green-100 text-portland-green-800",
      "GF": "bg-breakfast-yellow-100 text-breakfast-yellow-800"
    };
    return colors[dietary as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-breakfast-yellow-50">
      {/* Header */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-coffee-brown-800 mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-coffee-brown-600 max-w-2xl mx-auto">
            Fresh, locally-sourced breakfast and brunch favorites made with love in the heart of Portland
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-6 sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <h3 className="font-medium text-coffee-brown-800 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id 
                      ? "bg-coffee-brown-600 hover:bg-coffee-brown-700" 
                      : "border-coffee-brown-300 text-coffee-brown-600 hover:bg-coffee-brown-50"
                    }
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Dietary Filter */}
            <div className="flex-1">
              <h3 className="font-medium text-coffee-brown-800 mb-3">Dietary Options</h3>
              <div className="flex flex-wrap gap-2">
                {dietaryFilters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedDietary === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDietary(filter.id)}
                    className={selectedDietary === filter.id 
                      ? "bg-portland-green-600 hover:bg-portland-green-700" 
                      : "border-portland-green-300 text-portland-green-600 hover:bg-portland-green-50"
                    }
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="card-hover border-0 shadow-lg bg-white">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg relative">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.popular && (
                    <Badge className="absolute top-3 left-3 bg-breakfast-yellow-500 text-coffee-brown-800 hover:bg-breakfast-yellow-600">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-xl font-semibold text-coffee-brown-800 flex-1">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1 ml-2">
                      <Star size={16} className="text-breakfast-yellow-500 fill-current" />
                      <span className="text-sm text-coffee-brown-600">{item.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-coffee-brown-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-2xl text-coffee-brown-800">
                      ${item.price.toFixed(2)}
                    </span>
                    <div className="flex gap-1">
                      {item.dietary.map((diet) => (
                        <Badge 
                          key={diet} 
                          variant="secondary" 
                          className={`text-xs ${getDietaryBadge(diet)}`}
                        >
                          {diet}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-coffee-brown-600 text-lg">
                No items match your current filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-coffee-brown-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-coffee-brown-200 mb-8 max-w-2xl mx-auto">
            Skip the wait and order ahead for pickup, or give us a call to place your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-breakfast-yellow-500 hover:bg-breakfast-yellow-600 text-coffee-brown-800 font-semibold">
              Order Online
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-coffee-brown-800">
              Call (503) 555-1234
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
