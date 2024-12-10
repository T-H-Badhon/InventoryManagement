'use client'

import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Category from './Category'
import ProductCard from './ProductCard'

type Product = {
  id: string
  name: string
}

type CategoryType = {
  id: string
  title: string
  products: Product[]
}

const initialData: CategoryType[] = [
  {
    id: 'uncategory',
    title: 'Uncategory',
    products: [
      { id: 'p1', name: 'Product 1' },
      { id: 'p2', name: 'Product 2' },
      { id: 'p3', name: 'Product 3' },
    ],
  },
  {
    id: 'food',
    title: 'Food',
    products: [
      { id: 'p4', name: 'Apple' },
      { id: 'p5', name: 'Banana' },
      { id: 'p6', name: 'Orange' },
    ],
  },
  {
    id: 'cloth',
    title: 'Cloth',
    products: [
      { id: 'p7', name: 'T-shirt' },
      { id: 'p8', name: 'Jeans' },
      { id: 'p9', name: 'Socks' },
    ],
  },
  {
    id: 'bags',
    title: 'Bags',
    products: [
      { id: 'p10', name: 'T-shfsfsfirt' },
      { id: 'p11', name: 'Jesfsdfans' },
      { id: 'p12', name: 'sfsf' },
    ],
  },
]

export default function KanbanBoard() {
  const [categories, setCategories] = useState<CategoryType[]>(initialData)

  const moveProduct = (productId: string, fromCategoryId: string, toCategoryId: string) => {
    setCategories((prevCategories) => {
      const newCategories = prevCategories.map((category) => {
        if (category.id === fromCategoryId) {
          return {
            ...category,
            products: category.products.filter((product) => product.id !== productId),
          }
        }
        if (category.id === toCategoryId) {
          const productToMove = prevCategories
            .find((cat) => cat.id === fromCategoryId)
            ?.products.find((product) => product.id === productId)
          if (productToMove) {
            return {
              ...category,
              products: [...category.products, productToMove],
            }
          }
        }
        return category
      })
      return newCategories
    })
  }

  return (
    <DndProvider backend={HTML5Backend}>
        <h1 className='text-center text-3xl font-extrabold'>Categories</h1>
      <div className="flex  p-4 items-start justify-center flex-wrap max-w-[1200px] gap-5 mx-auto px-5">
        {categories.map((category) => (
          <Category key={category.id} id={category.id} title={category.title}>
            {category.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                categoryId={category.id}
                onMoveProduct={moveProduct}
              />
            ))}
          </Category>
        ))}
      </div>
    </DndProvider>
  )
}

