
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-breakfast-yellow-50">
      {/* Header */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-coffee-brown-800 mb-4">
            Our Story
          </h1>
          <p className="text-xl text-coffee-brown-600 max-w-2xl mx-auto">
            From humble beginnings to Portland's beloved breakfast destination
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-coffee-brown-800 mb-6">
                Born in Portland, Loved by Portland
              </h2>
              <div className="space-y-4 text-coffee-brown-600 leading-relaxed">
                <p>
                  Cricket Cafe opened its doors in 2015 with a simple mission: to serve the best breakfast in Portland using locally sourced, fresh ingredients. What started as a small neighborhood spot has grown into a beloved destination for locals and visitors alike.
                </p>
                <p>
                  Our founders, Sarah and Mike Thompson, moved to Portland from the Midwest with a dream of creating a space where community could gather over exceptional food. They fell in love with Portland's vibrant food scene and commitment to local sourcing, which became the foundation of Cricket Cafe.
                </p>
                <p>
                  Every recipe at Cricket Cafe tells a story. From our famous buttermilk pancakes (Sarah's grandmother's recipe) to our Portland Blend coffee (a collaboration with local roasters), we're committed to bringing you flavors that celebrate both tradition and innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&h=600"
                alt="Cozy interior of Cricket Cafe"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-breakfast-yellow-400 p-4 rounded-lg shadow-lg">
                <p className="font-serif text-coffee-brown-800 font-semibold">
                  "Best Breakfast in Portland"
                </p>
                <p className="text-sm text-coffee-brown-600">
                  - Portland Monthly, 2022, 2023, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-coffee-brown-800 mb-4">
              What We Stand For
            </h2>
            <p className="text-coffee-brown-600 text-lg max-w-2xl mx-auto">
              Our values guide everything we do, from ingredient sourcing to customer service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-portland-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-portland-green-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-coffee-brown-800 mb-4">
                  Local First
                </h3>
                <p className="text-coffee-brown-600">
                  We source our ingredients from Portland-area farms and suppliers, supporting our local economy and ensuring the freshest possible meals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-breakfast-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={24} className="text-breakfast-yellow-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-coffee-brown-800 mb-4">
                  Made with Love
                </h3>
                <p className="text-coffee-brown-600">
                  Every dish is prepared with care and attention to detail. We believe that food tastes better when it's made with passion and served with warmth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-coffee-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-coffee-brown-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-coffee-brown-800 mb-4">
                  Community Focused
                </h3>
                <p className="text-coffee-brown-600">
                  Cricket Cafe is more than a restaurant - it's a gathering place where neighbors become friends and every guest feels like family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-coffee-brown-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-coffee-brown-600 text-lg">
              The passionate people behind your favorite breakfast spot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&h=400"
                  alt="Sarah Thompson, Co-Owner & Head Chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-coffee-brown-800 mb-2">
                  Sarah Thompson
                </h3>
                <p className="text-coffee-brown-600 mb-3">Co-Owner & Head Chef</p>
                <p className="text-sm text-coffee-brown-600">
                  Sarah brings 15 years of culinary experience and a passion for farm-to-table cooking to every dish at Cricket Cafe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=400"
                  alt="Mike Thompson, Co-Owner & General Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-coffee-brown-800 mb-2">
                  Mike Thompson
                </h3>
                <p className="text-coffee-brown-600 mb-3">Co-Owner & General Manager</p>
                <p className="text-sm text-coffee-brown-600">
                  Mike ensures every guest has an exceptional experience and manages our relationships with local suppliers and the community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&h=400&sat=-100"
                  alt="The Cricket Cafe Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-coffee-brown-800 mb-2">
                  Our Amazing Staff
                </h3>
                <p className="text-coffee-brown-600 mb-3">The Heart of Cricket Cafe</p>
                <p className="text-sm text-coffee-brown-600">
                  Our dedicated team of baristas, servers, and kitchen staff work together to create the warm, welcoming atmosphere you love.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-coffee-brown-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Join Our Story
          </h2>
          <p className="text-coffee-brown-200 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate people to join our team and help us serve Portland's best breakfast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-breakfast-yellow-500 hover:bg-breakfast-yellow-600 text-coffee-brown-800 font-semibold">
              View Open Positions
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-coffee-brown-800">
              Visit Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
