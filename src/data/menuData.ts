export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  category: string
  isPopular?: boolean
  isSpicy?: boolean
  isVegetarian?: boolean
  image?: string
}

export interface MenuCategory {
  id: string
  name: string
  description?: string
}

export const menuCategories: MenuCategory[] = [
  { id: 'all', name: 'All Items' },
  { id: 'appetizers', name: 'Appetizers', description: 'Start your meal with our delicious appetizers' },
  { id: 'soups', name: 'Soups', description: 'Warm and comforting traditional soups' },
  { id: 'rice', name: 'Fried Rice', description: 'Wok-fried rice dishes' },
  { id: 'noodles', name: 'Noodles', description: 'Hand-crafted noodle dishes' },
  { id: 'chicken', name: 'Chicken', description: 'Tender chicken preparations' },
  { id: 'beef', name: 'Beef', description: 'Premium beef dishes' },
  { id: 'seafood', name: 'Seafood', description: 'Fresh seafood selections' },
  { id: 'vegetarian', name: 'Vegetarian', description: 'Healthy vegetable dishes' },
]

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 'spring-rolls',
    category: 'appetizers',
    name: 'Spring Rolls',
    description: 'Crispy vegetable spring rolls served with sweet chili sauce',
    price: '$5.95',
    isPopular: true,
    isVegetarian: true,
  },
  {
    id: 'egg-rolls',
    category: 'appetizers',
    name: 'Egg Rolls',
    description: 'Traditional pork and vegetable egg rolls',
    price: '$5.50',
  },
  {
    id: 'crab-rangoon',
    category: 'appetizers',
    name: 'Crab Rangoon',
    description: 'Crispy wontons filled with cream cheese and crab',
    price: '$6.95',
    isPopular: true,
  },
  {
    id: 'pot-stickers',
    category: 'appetizers',
    name: 'Pot Stickers',
    description: 'Pan-fried dumplings with pork and vegetables',
    price: '$7.50',
  },
  // Soups
  {
    id: 'hot-sour-soup',
    category: 'soups',
    name: 'Hot & Sour Soup',
    description: 'Traditional spicy and tangy soup with tofu and mushrooms',
    price: '$8.95',
    isPopular: true,
    isSpicy: true,
  },
  {
    id: 'egg-drop-soup',
    category: 'soups',
    name: 'Egg Drop Soup',
    description: 'Classic Chinese soup with ribbons of egg',
    price: '$7.95',
  },
  {
    id: 'wonton-soup',
    category: 'soups',
    name: 'Wonton Soup',
    description: 'Homemade wontons in savory chicken broth',
    price: '$8.50',
  },
  // Fried Rice
  {
    id: 'chicken-fried-rice',
    category: 'rice',
    name: 'Chicken Fried Rice',
    description: 'Wok-fried rice with chicken, egg, and vegetables',
    price: '$10.95',
    isPopular: true,
  },
  {
    id: 'beef-fried-rice',
    category: 'rice',
    name: 'Beef Fried Rice',
    description: 'Savory fried rice with tender beef and mixed vegetables',
    price: '$11.95',
  },
  {
    id: 'shrimp-fried-rice',
    category: 'rice',
    name: 'Shrimp Fried Rice',
    description: 'Premium fried rice with succulent shrimp',
    price: '$12.95',
  },
  {
    id: 'vegetable-fried-rice',
    category: 'rice',
    name: 'Vegetable Fried Rice',
    description: 'Healthy option with assorted fresh vegetables',
    price: '$9.95',
    isVegetarian: true,
  },
  // Noodles
  {
    id: 'lo-mein',
    category: 'noodles',
    name: 'Lo Mein',
    description: 'Soft noodles stir-fried with vegetables and your choice of protein',
    price: '$11.95',
    isPopular: true,
  },
  {
    id: 'chow-mein',
    category: 'noodles',
    name: 'Chow Mein',
    description: 'Crispy noodles with stir-fried vegetables',
    price: '$11.95',
  },
  {
    id: 'singapore-noodles',
    category: 'noodles',
    name: 'Singapore Noodles',
    description: 'Curry-flavored rice noodles with shrimp and chicken',
    price: '$13.95',
    isSpicy: true,
  },
  // Chicken
  {
    id: 'kung-pao-chicken',
    category: 'chicken',
    name: 'Kung Pao Chicken',
    description: 'Spicy stir-fried chicken with peanuts and dried chilies',
    price: '$12.95',
    isPopular: true,
    isSpicy: true,
  },
  {
    id: 'general-tso-chicken',
    category: 'chicken',
    name: "General Tso's Chicken",
    description: 'Crispy chicken in sweet and spicy sauce',
    price: '$13.50',
    isPopular: true,
    isSpicy: true,
  },
  {
    id: 'orange-chicken',
    category: 'chicken',
    name: 'Orange Chicken',
    description: 'Crispy chicken with tangy orange sauce',
    price: '$13.50',
  },
  {
    id: 'sesame-chicken',
    category: 'chicken',
    name: 'Sesame Chicken',
    description: 'Tender chicken with sesame seeds in sweet sauce',
    price: '$12.95',
  },
  // Beef
  {
    id: 'beef-broccoli',
    category: 'beef',
    name: 'Beef with Broccoli',
    description: 'Tender beef slices with fresh broccoli in brown sauce',
    price: '$13.95',
    isPopular: true,
  },
  {
    id: 'mongolian-beef',
    category: 'beef',
    name: 'Mongolian Beef',
    description: 'Sliced beef with scallions in savory sauce',
    price: '$14.95',
  },
  {
    id: 'pepper-steak',
    category: 'beef',
    name: 'Pepper Steak',
    description: 'Beef strips with bell peppers and onions',
    price: '$13.95',
  },
  // Seafood
  {
    id: 'shrimp-lobster-sauce',
    category: 'seafood',
    name: 'Shrimp with Lobster Sauce',
    description: 'Succulent shrimp in rich lobster-flavored sauce',
    price: '$15.95',
    isPopular: true,
  },
  {
    id: 'salt-pepper-shrimp',
    category: 'seafood',
    name: 'Salt & Pepper Shrimp',
    description: 'Crispy shrimp with aromatic salt and pepper seasoning',
    price: '$16.95',
  },
  {
    id: 'seafood-delight',
    category: 'seafood',
    name: 'Seafood Delight',
    description: 'Combination of shrimp, scallops, and fish with vegetables',
    price: '$17.95',
  },
  // Vegetarian
  {
    id: 'buddhas-delight',
    category: 'vegetarian',
    name: "Buddha's Delight",
    description: 'Assorted vegetables in brown sauce',
    price: '$10.95',
    isVegetarian: true,
  },
  {
    id: 'ma-po-tofu',
    category: 'vegetarian',
    name: 'Ma Po Tofu',
    description: 'Soft tofu in spicy Szechuan sauce',
    price: '$11.95',
    isPopular: true,
    isSpicy: true,
    isVegetarian: true,
  },
  {
    id: 'vegetable-spring-rolls',
    category: 'vegetarian',
    name: 'Vegetable Spring Rolls',
    description: 'Fresh vegetables wrapped in delicate rice paper',
    price: '$9.95',
    isVegetarian: true,
  },
]

export default menuItems