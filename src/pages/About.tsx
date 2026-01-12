// src/pages/About.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Heart, Users, Star } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Quality Ingredients',
      description: 'We source only the freshest ingredients to ensure every dish meets our high standards',
    },
    {
      icon: Users,
      title: 'Family Tradition',
      description: 'Recipes and cooking techniques passed down through generations of our family',
    },
    {
      icon: Award,
      title: 'Authentic Flavors',
      description: 'Traditional Chinese cooking methods that preserve authentic taste and texture',
    },
    {
      icon: Star,
      title: 'Customer First',
      description: 'Your satisfaction is our priority, with exceptional service every time',
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2670327/pexels-photo-2670327.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-foreground/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <div className="mb-6">
              <div className="inline-block h-0.5 bg-secondary w-20 mb-4"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-4">
              Our Story
            </h1>
            <p className="text-background/90 text-lg sm:text-xl">
              A family tradition of authentic Chinese cuisine
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="gold-divider mb-6"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Welcome to Kim Long Restaurants
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Kim Long Restaurants has been a cornerstone of the Chicago dining scene, 
                bringing authentic Chinese cuisine to our beloved community. Our journey 
                began with a simple dream: to share the rich flavors and traditions of 
                Chinese cooking with our neighbors.
              </p>

              <p className="text-lg">
                What started as a small family operation has grown into a trusted name 
                in Chicago's culinary landscape. But despite our growth, we've never lost 
                sight of what matters most – quality, authenticity, and the warmth of 
                family hospitality.
              </p>

              <p className="text-lg">
                Every dish we serve is prepared with care, using recipes that have been 
                perfected over generations. We believe in using only the freshest ingredients 
                and traditional cooking methods to create meals that not only satisfy your 
                hunger but also warm your heart.
              </p>

              <p className="text-lg">
                Our commitment extends beyond just great food. We're dedicated to creating 
                an experience – whether you're dining in our restaurant, picking up takeout, 
                or having food delivered to your home. We treat every customer like family, 
                because that's who we are at our core.
              </p>

              <p className="text-lg font-medium text-foreground">
                Thank you for making Kim Long Restaurants a part of your dining tradition. 
                We look forward to serving you and your family for many years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-all duration-300 bg-card"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Visit Us in Chicago
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're conveniently located at 5114 W Fullerton Ave, serving delicious 
              Chinese cuisine with dine-in, takeout, and delivery options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <Link to="/menu">View Our Menu</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link to="/contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
