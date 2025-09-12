import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Users, 
  Briefcase, 
  Moon, 
  Activity,
  Sparkles,
  Shield
} from "lucide-react";

const serviceCategories = [
  {
    title: "Clinical Psychology",
    description: "Professional treatment for mental health conditions",
    icon: Brain,
    services: [
      "Depression Management",
      "Anxiety & Panic Disorders", 
      "Bipolar Disorder Support",
      "PTSD & Trauma Counseling"
    ],
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Counseling Psychology", 
    description: "Emotional well-being and lifestyle support",
    icon: Heart,
    services: [
      "Stress Management",
      "Self-Esteem Building",
      "Emotional Counseling",
      "Lifestyle Coaching"
    ],
    color: "bg-accent/10 text-accent"
  },
  {
    title: "Work-Life Balance",
    description: "Career and workplace wellness coaching",
    icon: Briefcase,
    services: [
      "Burnout Prevention",
      "Workplace Stress",
      "Career Transition",
      "Leadership Coaching"
    ],
    color: "bg-therapeutic/10 text-therapeutic"
  },
  {
    title: "Relationship Therapy",
    description: "Building healthier connections and communication",
    icon: Users,
    services: [
      "Couples Counseling",
      "Family Therapy",
      "Communication Skills",
      "Conflict Resolution"
    ],
    color: "bg-accent/10 text-accent"
  },
  {
    title: "Sleep & Wellness",
    description: "Improving sleep quality and overall wellness",
    icon: Moon,
    services: [
      "Sleep Disorder Treatment",
      "Insomnia Therapy",
      "Sleep Hygiene",
      "Relaxation Techniques"
    ],
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Specialized Programs",
    description: "Targeted therapy for specific challenges",
    icon: Sparkles,
    services: [
      "Addiction Recovery",
      "Eating Disorders",
      "Grief Counseling",
      "Mindfulness Training"
    ],
    color: "bg-therapeutic/10 text-therapeutic"
  }
];

const features = [
  {
    icon: Activity,
    title: "Mood Tracking",
    description: "Daily mood monitoring with gamified streaks and insights"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "HIPAA compliant platform with end-to-end encryption"
  },
  {
    icon: Users,
    title: "Group Sessions",
    description: "Anonymous group workshops and peer support communities"
  },
  {
    icon: Sparkles,
    title: "AI Companion",
    description: "CareBuddy AI assistant for 24/7 emotional support"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Comprehensive Care
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert Therapy &
            <span className="text-transparent bg-gradient-accent bg-clip-text"> Consultation Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our licensed psychologists and therapists provide personalized care across 
            a wide range of mental health and wellness areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="transition-all duration-300 hover:shadow-soft hover:scale-105 bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="border-t border-border pt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Enhanced with Modern Technology
            </h3>
            <p className="text-lg text-muted-foreground">
              Gamification, AI assistance, and comprehensive tracking to support your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}