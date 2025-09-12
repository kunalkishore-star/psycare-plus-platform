import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const pricingTiers = [
  {
    name: "Daily",
    subtitle: "Perfect for trying out",
    price: "₹99",
    duration: "/day",
    originalPrice: "₹149",
    features: [
      "1 Consultation (20-30 mins)",
      "Daily Mood Tracker",
      "Guided Meditation",
      "Self-Care Tips",
      "Basic Support"
    ],
    popular: false,
    variant: "calm" as const,
    icon: Zap
  },
  {
    name: "Weekly",
    subtitle: "Short-term focused support",
    price: "₹599",
    duration: "/week",
    originalPrice: "₹799",
    features: [
      "3-4 Expert Sessions",
      "Choice of Therapy Focus",
      "Group Workshop Access",
      "Progress Report",
      "24x7 Chat Support",
      "Personalized Plan"
    ],
    popular: true,
    variant: "hero" as const,
    icon: Star
  },
  {
    name: "Monthly",
    subtitle: "Complete mental wellness",
    price: "₹1,999",
    duration: "/month",
    originalPrice: "₹2,999",
    features: [
      "8-12 Sessions per month",
      "All Therapy Types (CBT, Mindfulness)",
      "Unlimited Chat Support",
      "2-3 Group Workshops",
      "Weekly Growth Plan Review",
      "Priority Emergency Support",
      "Special Program Discounts"
    ],
    popular: false,
    variant: "therapeutic" as const,
    icon: Crown
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Flexible Pricing Plans
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your
            <span className="text-transparent bg-gradient-hero bg-clip-text"> Wellness Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with any plan and upgrade anytime. All plans include access to licensed therapists 
            and personalized mental health support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <Card 
                key={tier.name} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-primary shadow-glow bg-gradient-card' 
                    : 'hover:shadow-soft bg-card'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-hero text-center py-2">
                    <span className="text-sm font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className={`text-center ${tier.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-full ${
                      tier.popular ? 'bg-primary/10' : 'bg-accent/10'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        tier.popular ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <CardDescription className="text-base">{tier.subtitle}</CardDescription>
                  
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground">{tier.duration}</div>
                      <div className="text-xs text-muted-foreground line-through">
                        {tier.originalPrice}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={tier.variant} 
                    size="lg" 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include secure video calls, progress tracking, and 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}