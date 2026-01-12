export interface Review {
  id: string
  author: string
  rating: number
  date: string
  text: string
  source?: string
}

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Maria G.',
    rating: 5,
    date: '2024-01-15',
    text: 'Best Chinese food in Chicago! The Kung Pao Chicken is absolutely amazing. Fresh ingredients and authentic flavors. Will definitely be coming back!',
    source: 'Google'
  },
  {
    id: '2',
    author: 'John D.',
    rating: 5,
    date: '2024-01-10',
    text: 'Family-owned gem! We\'ve been coming here for years. The General Tso\'s Chicken is our favorite. Fast service and always consistent quality.',
    source: 'Yelp'
  },
  {
    id: '3',
    author: 'Sarah L.',
    rating: 5,
    date: '2024-01-05',
    text: 'The dim sum here is incredible! Authentic flavors that remind me of my grandmother\'s cooking. Highly recommend the pot stickers and spring rolls.',
    source: 'Google'
  },
  {
    id: '4',
    author: 'Michael T.',
    rating: 4,
    date: '2023-12-28',
    text: 'Great food, friendly staff. The delivery was quick and the food arrived hot. The beef with broccoli is my go-to order.',
    source: 'Yelp'
  },
  {
    id: '5',
    author: 'Emily W.',
    rating: 5,
    date: '2023-12-20',
    text: 'Perfect for family dinners! Large portions, reasonable prices, and the food is always fresh. The hot and sour soup is the best I\'ve ever had.',
    source: 'Google'
  },
  {
    id: '6',
    author: 'David K.',
    rating: 5,
    date: '2023-12-15',
    text: 'Authentic Chinese cuisine at its finest. The seafood delight is exceptional - you can taste the freshness. A hidden gem in Chicago!',
    source: 'Yelp'
  }
]

export default reviews