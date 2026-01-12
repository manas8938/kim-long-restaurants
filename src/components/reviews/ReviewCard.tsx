import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Review } from '@/data/reviewsData'

interface ReviewCardProps {
  review: Review
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card className="border-border bg-card hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-semibold text-foreground">{review.author}</h4>
            <p className="text-sm text-muted-foreground">{review.source}</p>
          </div>
          <StarRating rating={review.rating} />
        </div>
        <p className="text-muted-foreground leading-relaxed">"{review.text}"</p>
        <p className="text-sm text-muted-foreground mt-4">
          {new Date(review.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </CardContent>
    </Card>
  )
}

export default ReviewCard