import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sprout, MessageCircle, TrendingUp, Bell } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const FarmingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              കേരള കർഷക സഹായി
              <span className="block text-2xl md:text-3xl text-accent mt-2 font-medium">
                AI Farming Assistant for Kerala
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Smart farming solutions powered by AI. Get personalized advice, track your crops, 
              and maximize your harvest with traditional wisdom meets modern technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-floating transition-all duration-300 hover:scale-105">
              <Sprout className="mr-2 h-6 w-6" />
              Start Farming Journey
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300">
              <MessageCircle className="mr-2 h-6 w-6" />
              Talk to AI Assistant
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-floating transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Malayalam AI Chat</h3>
                <p className="text-muted-foreground">
                  Talk to our AI in Malayalam. Get instant answers about crops, weather, and farming techniques.
                </p>
              </div>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-floating transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Smart Advisory</h3>
                <p className="text-muted-foreground">
                  Personalized farming advice based on your land, crops, and local weather conditions.
                </p>
              </div>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-floating transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-warning to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Smart Alerts</h3>
                <p className="text-muted-foreground">
                  Never miss important farming activities with timely reminders and weather alerts.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmingHero;