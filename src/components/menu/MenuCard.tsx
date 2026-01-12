import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MenuItem } from '@/data/menuData'

interface MenuCardProps {
  item: MenuItem
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border bg-card flex flex-col">
      <CardHeader className="flex-grow">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl text-foreground">{item.name}</CardTitle>
          <div className="flex gap-1">
            {item.isPopular && (
              <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border-secondary">
                Popular
              </Badge>
            )}
            {item.isSpicy && (
              <Badge variant="outline" className="text-red-500 border-red-500">
                🌶️
              </Badge>
            )}
            {item.isVegetarian && (
              <Badge variant="outline" className="text-green-500 border-green-500">
                🥬
              </Badge>
            )}
          </div>
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
  )
}

export default MenuCard