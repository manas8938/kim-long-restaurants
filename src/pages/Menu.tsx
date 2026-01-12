import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuCategories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'soups', name: 'Soups' },
    { id: 'rice', name: 'Fried Rice' },
    { id: 'noodles', name: 'Noodles' },
    { id: 'chicken', name: 'Chicken' },
    { id: 'beef', name: 'Beef' },
    { id: 'seafood', name: 'Seafood' },
    { id: 'vegetarian', name: 'Vegetarian' },
  ];

  const menuItems = [
    // Appetizers
    {
      category: 'appetizers',
      name: 'Spring Rolls',
      description: 'Crispy vegetable spring rolls served with sweet chili sauce',
      price: '$5.95',
      isPopular: true,
    },
    {
      category: 'appetizers',
      name: 'Egg Rolls',
      description: 'Traditional pork and vegetable egg rolls',
      price: '$5.50',
    },
    {
      category: 'appetizers',
      name: 'Crab Rangoon',
      description: 'Crispy wontons filled with cream cheese and crab',
      price: '$6.95',
      isPopular: true,
    },
    {
      category: 'appetizers',
      name: 'Pot Stickers',
      description: 'Pan-fried dumplings with pork and vegetables',
      price: '$7.50',
    },
    // Soups
    {
      category: 'soups',
      name: 'Hot & Sour Soup',
      description: 'Traditional spicy and tangy soup with tofu and mushrooms',
      price: '$8.95',
      isPopular: true,
    },
    {
      category: 'soups',
      name: 'Egg Drop Soup',
      description: 'Classic Chinese soup with ribbons of egg',
      price: '$7.95',
    },
    {
      category: 'soups',
      name: 'Wonton Soup',
      description: 'Homemade wontons in savory chicken broth',
      price: '$8.50',
    },
    // Fried Rice
    {
      category: 'rice',
      name: 'Chicken Fried Rice',
      description: 'Wok-fried rice with chicken, egg, and vegetables',
      price: '$10.95',
      isPopular: true,
    },
    {
      category: 'rice',
      name: 'Beef Fried Rice',
      description: 'Savory fried rice with tender beef and mixed vegetables',
      price: '$11.95',
    },
    {
      category: 'rice',
      name: 'Shrimp Fried Rice',
      description: 'Premium fried rice with succulent shrimp',
      price: '$12.95',
    },
    {
      category: 'rice',
      name: 'Vegetable Fried Rice',
      description: 'Healthy option with assorted fresh vegetables',
      price: '$9.95',
    },
    // Noodles
    {
      category: 'noodles',
      name: 'Lo Mein',
      description: 'Soft noodles stir-fried with vegetables and your choice of protein',
      price: '$11.95',
      isPopular: true,
    },
    {
      category: 'noodles',
      name: 'Chow Mein',
      description: 'Crispy noodles with stir-fried vegetables',
      price: '$11.95',
    },
    {
      category: 'noodles',
      name: 'Singapore Noodles',
      description: 'Curry-flavored rice noodles with shrimp and chicken',
      price: '$13.95',
    },
    // Chicken
    {
      category: 'chicken',
      name: 'Kung Pao Chicken',
      description: 'Spicy stir-fried chicken with peanuts and dried chilies',
      price: '$12.95',
      isPopular: true,
    },
    {
      category: 'chicken',
      name: "General Tso's Chicken",
      description: 'Crispy chicken in sweet and spicy sauce',
      price: '$13.50',
      isPopular: true,
    },
    {
      category: 'chicken',
      name: 'Orange Chicken',
      description: 'Crispy chicken with tangy orange sauce',
      price: '$13.50',
    },
    {
      category: 'chicken',
      name: 'Sesame Chicken',
      description: 'Tender chicken with sesame seeds in sweet sauce',
      price: '$12.95',
    },
    // Beef
    {
      category: 'beef',
      name: 'Beef with Broccoli',
      description: 'Tender beef slices with fresh broccoli in brown sauce',
      price: '$13.95',
      isPopular: true,
    },
    {
      category: 'beef',
      name: 'Mongolian Beef',
      description: 'Sliced beef with scallions in savory sauce',
      price: '$14.95',
    },
    {
      category: 'beef',
      name: 'Pepper Steak',
      description: 'Beef strips with bell peppers and onions',
      price: '$13.95',
    },
    // Seafood
    {
      category: 'seafood',
      name: 'Shrimp with Lobster Sauce',
      description: 'Succulent shrimp in rich lobster-flavored sauce',
      price: '$15.95',
      isPopular: true,
    },
    {
      category: 'seafood',
      name: 'Salt & Pepper Shrimp',
      description: 'Crispy shrimp with aromatic salt and pepper seasoning',
      price: '$16.95',
    },
    {
      category: 'seafood',
      name: 'Seafood Delight',
      description: 'Combination of shrimp, scallops, and fish with vegetables',
      price: '$17.95',
    },
    // Vegetarian
    {
      category: 'vegetarian',
      name: "Buddha's Delight",
      description: 'Assorted vegetables in brown sauce',
      price: '$10.95',
    },
    {
      category: 'vegetarian',
      name: 'Ma Po Tofu',
      description: 'Soft tofu in spicy Szechuan sauce',
      price: '$11.95',
      isPopular: true,
    },
    {
      category: 'vegetarian',
      name: 'Vegetable Spring Rolls',
      description: 'Fresh vegetables wrapped in delicate rice paper',
      price: '$9.95',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <div className="inline-block h-0.5 bg-secondary w-20 mb-4"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our Menu
            </h1>
            <p className="text-background/80 text-lg">
              Explore our authentic Chinese cuisine, crafted with the finest ingredients
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-6 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {menuCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border-border text-foreground hover:bg-muted'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-border bg-card flex flex-col"
              >
                <CardHeader className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-foreground">{item.name}</CardTitle>
                    {item.isPopular && (
                      <Badge
                        variant="secondary"
                        className="bg-secondary/20 text-secondary-foreground border-secondary"
                      >
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="tel:7732377554">Order</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Call us now for dine-in, takeout, or delivery
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="tel:7732377554">Call (773) 237-7554</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Menu;