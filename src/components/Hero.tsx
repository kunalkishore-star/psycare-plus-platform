import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock, Users, Star, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Peaceful therapy environment" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-therapeutic/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-8">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 10,000+ individuals</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Mental Health
            <span className="block text-transparent bg-gradient-hero bg-clip-text">
              Journey Starts Here
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional psychology consultations, therapy sessions, and personalized mental health support. 
            Available daily, weekly, or monthly to fit your wellness journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="min-w-48">
              Start Your Journey
            </Button>
            <Button variant="calm" size="xl" className="min-w-48">
              <MessageCircle className="h-5 w-5" />
              Talk to Expert
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">HIPAA Compliant</p>
              <p className="text-xs text-muted-foreground">Secure & Private</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">24/7 Support</p>
              <p className="text-xs text-muted-foreground">Always Available</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">Expert Therapists</p>
              <p className="text-xs text-muted-foreground">Licensed Professionals</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">4.9/5 Rating</p>
              <p className="text-xs text-muted-foreground">Trusted Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}