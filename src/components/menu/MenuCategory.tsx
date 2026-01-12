import React from 'react'
import MenuCard from './MenuCard'
import { MenuItem } from '@/data/menuData'

interface MenuCategoryProps {
  title: string
  description?: string
  items: MenuItem[]
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, description, items }) => {
  if (items.length === 0) return null

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{title}</h2>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        <div className="gold-divider mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default MenuCategory