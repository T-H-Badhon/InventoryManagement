import React from 'react'
import { useDrag } from 'react-dnd'

type ProductCardProps = {
  id: string
  name: string
  categoryId: string
  onMoveProduct: (productId: string, fromCategoryId: string, toCategoryId: string) => void
}

export default function ProductCard({ id, name, categoryId, onMoveProduct }: ProductCardProps) {
  const [{ isDragging }, drag] = useDrag({
    type: 'PRODUCT',
    item: { id, categoryId },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult() as { categoryId: string } | null
      if (item && dropResult) {
        onMoveProduct(item.id, item.categoryId, dropResult.categoryId)
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={drag as any}
      className={`bg-white p-2 rounded shadow cursor-move ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {name}
    </div>
  )
}

