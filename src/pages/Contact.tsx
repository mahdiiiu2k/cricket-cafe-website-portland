
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-breakfast-yellow-50">
      {/* Header */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-coffee-brown-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-coffee-brown-600 max-w-2xl mx-auto">
            We'd love to hear from you! Get in touch with questions, feedback, or just to say hello.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin size={20} className="text-coffee-brown-600" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-coffee-brown-800 mb-2">Address</h3>
                  <p className="text-coffee-brown-600">
                    123 SE Portland Street<br />
                    Portland, OR 97202
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-coffee-brown-800 mb-2">Parking</h3>
                  <p className="text-coffee-brown-600 text-sm">
                    Free street parking available. Bike racks provided at front entrance.
                  </p>
                </div>

                {/* Embedded Map Placeholder */}
                <div className="w-full h-48 bg-coffee-brown-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-coffee-brown-600">
                    <MapPin size={32} className="mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Click to open in Google Maps</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone size={20} className="text-coffee-brown-600" />
                  Call or Text
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-coffee-brown-800">Phone</h3>
                    <a 
                      href="tel:+15035551234" 
                      className="text-coffee-brown-600 hover:text-coffee-brown-800 transition-colors"
                    >
                      (503) 555-1234
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-brown-800">Email</h3>
                    <a 
                      href="mailto:hello@cricketcafe.com" 
                      className="text-coffee-brown-600 hover:text-coffee-brown-800 transition-colors"
                    >
                      hello@cricketcafe.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock size={20} className="text-coffee-brown-600" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-coffee-brown-800 font-medium">Monday - Friday</span>
                    <span className="text-coffee-brown-600">8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-coffee-brown-800 font-medium">Saturday - Sunday</span>
                    <span className="text-coffee-brown-600">8:00 AM - 2:00 PM</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-portland-green-50 rounded-lg">
                  <p className="text-sm text-portland-green-800">
                    <span className="font-medium">Currently Open:</span> We're serving fresh breakfast and coffee!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-coffee-brown-600 hover:text-coffee-brown-800 transition-colors"
                  >
                    <Facebook size={20} />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-coffee-brown-600 hover:text-coffee-brown-800 transition-colors"
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail size={20} className="text-coffee-brown-600" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-coffee-brown-800 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-coffee-brown-200 focus:border-coffee-brown-500"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-coffee-brown-800 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-coffee-brown-200 focus:border-coffee-brown-500"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-coffee-brown-800 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-coffee-brown-200 focus:border-coffee-brown-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-coffee-brown-800 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-coffee-brown-200 focus:border-coffee-brown-500 min-h-[120px]"
                      placeholder="Tell us what's on your mind..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-coffee-brown-600 hover:bg-coffee-brown-700 text-white font-semibold py-3"
                    size="lg"
                  >
                    Send Message
                  </Button>

                  <p className="text-xs text-coffee-brown-600 text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                asChild 
                variant="outline" 
                className="border-coffee-brown-300 text-coffee-brown-600 hover:bg-coffee-brown-50 py-6"
              >
                <a href="tel:+15035551234" className="flex items-center justify-center gap-2">
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="border-portland-green-300 text-portland-green-600 hover:bg-portland-green-50 py-6"
              >
                <a href="mailto:hello@cricketcafe.com" className="flex items-center justify-center gap-2">
                  <Mail size={18} />
                  <span>Email Us</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
