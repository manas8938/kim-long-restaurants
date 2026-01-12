import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, MapPin, Clock, ChefHat } from 'lucide-react'

const Order: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <div className="inline-block h-0.5 bg-secondary w-20 mb-4" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Order Now</h1>
            <p className="text-background/80 text-lg">
              Choose your preferred way to enjoy our authentic Chinese cuisine
            </p>
          </div>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-border hover:shadow-xl transition-all duration-300 bg-card text-center">
              <CardContent className="pt-10 pb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
                  <Phone className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Call to Order</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Speak directly with our team to place your order for pickup or delivery
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                >
                  <a href="tel:7732377554" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    (773) 237-7554
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-300 bg-card text-center">
              <CardContent className="pt-10 pb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Dine In</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Visit our restaurant for a complete dining experience with family and friends
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Get Directions
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-300 bg-card text-center">
              <CardContent className="pt-10 pb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
                  <ChefHat className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">View Menu</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Browse our full menu to see all available dishes and prices
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                >
                  <Link to="/menu" className="flex items-center justify-center gap-2">
                    <ChefHat className="h-5 w-5" />
                    View Menu
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Restaurant Info */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-muted/30">
              <CardContent className="pt-10 pb-10">
                <div className="text-center mb-8">
                  <div className="gold-divider mb-6" />
                  <h2 className="text-3xl font-bold text-foreground mb-4">Restaurant Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Address</h4>
                    <p className="text-muted-foreground text-sm">
                      5114 W Fullerton Ave<br />
                      Chicago, IL
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <a
                      href="tel:7732377554"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      (773) 237-7554
                    </a>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Hours</h4>
                    <div className="text-muted-foreground text-sm">
                      <p>Mon-Fri: 11AM-10PM</p>
                      <p>Sat-Sun: 12PM-11PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Experience Authentic Chinese Cuisine
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Fresh ingredients, traditional recipes, and exceptional service – that's our promise to you
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
          >
            <a href="tel:7732377554">Call Now to Order</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Order