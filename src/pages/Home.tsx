import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ChefHat, Truck, Star, Clock, Phone, MapPin } from 'lucide-react';

// --- Data Section ---
const highlights = [
  {
    icon: ChefHat,
    title: 'Authentic Cuisine',
    description: 'Traditional Chinese recipes passed down through generations',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to your doorstep',
  },
  {
    icon: Star,
    title: 'Chicago Favorite',
    description: 'Trusted by the community for exceptional quality',
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Made fresh with the finest ingredients every day',
  },
];

const featuredDishes = [
  {
    name: 'Kung Pao Chicken',
    description: 'Spicy stir-fried chicken with peanuts and vegetables',
    price: '$12.95',
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
  },
  {
    name: 'Dim Sum Platter',
    description: 'Assorted steamed dumplings with dipping sauce',
    price: '$14.95',
    image: 'https://images.pexels.com/photos/3911229/pexels-photo-3911229.jpeg',
  },
  {
    name: 'Hot & Sour Soup',
    description: 'Traditional spicy and tangy soup with tofu',
    price: '$8.95',
    image: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg',
  },
];

// --- Sub-Component Section ---
const HighlightCard = ({ item }: { item: typeof highlights[0] }) => {
  const Icon = item.icon;
  return (
    <Card className="border-border hover:shadow-lg transition-all duration-300 group bg-card">
      <CardContent className="pt-6 pb-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
      </CardContent>
    </Card>
  );
};

// --- Main Component ---
export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-6">
              <div className="inline-block">
                <span className="text-secondary text-sm font-medium tracking-[0.3em] uppercase">
                  Authentic Chinese Cuisine
                </span>
                <div className="h-0.5 bg-secondary mt-2 w-20" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
              Welcome to<br />
              <span className="text-secondary">Kim Long</span> Restaurants
            </h1>
            <p className="text-background/90 text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed">
              Experience the finest authentic Chinese cuisine in Chicago. From traditional favorites to modern flavors, every dish is crafted with passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8" 
                asChild
              >
                <Link to="/menu">View Menu</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-foreground text-base px-8 bg-transparent"
                asChild
              >
                <a href="tel:7732377554">Order Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((item) => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="gold-divider mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                About Kim Long Restaurants
              </h2>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              For years, Kim Long Restaurants has been serving the Chicago community with authentic Chinese cuisine. Our family-owned restaurant takes pride in using only the freshest ingredients and traditional cooking methods to bring you dishes that taste like home.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              Whether you're dining in, taking out, or having food delivered, we're committed to providing you with an exceptional culinary experience that keeps you coming back.
            </p>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground" 
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="gold-divider mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Dishes
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Discover our most popular and beloved dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <Card
                key={dish.name}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-border bg-card flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="pt-6 pb-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{dish.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{dish.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{dish.price}</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" 
                      asChild
                    >
                      <Link to="/menu">View Menu</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - FIXED BUTTON VISIBILITY */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-primary-foreground/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Call us now or visit our restaurant to enjoy authentic Chinese cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* FIXED: Changed to white border and text for visibility */}
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-base px-8 bg-transparent"
              asChild
            >
              <a href="tel:7732377554" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call (773) 237-7554
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8" 
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Get Directions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;