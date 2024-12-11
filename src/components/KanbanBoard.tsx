"use client";

import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Category from "./Category";
import ProductCard from "./ProductCard";
import { useGetAllCategoryQuery } from "@/redux/api/category/categoryApi";
import { useUpdateProductMutation } from "@/redux/api/product/productApi";

type Product = {
  id: string;
  name: string;
};

type CategoryType = {
  id: string;
  title: string;
  products: Product[];
};

// const initialData: CategoryType[] = [
//   {
//     id: 'dasdd',
//     title: 'Uncategory',
//     products: [
//       { id: 'pfsdfsd1', name: 'Product 1' },
//       { id: 'pfsdfs2', name: 'Product 2' },
//       { id: 'pfsdf3', name: 'Product 3' },
//     ],
//   },
//   {
//     id: 'sdfsfs',
//     title: 'Food',
//     products: [
//       { id: 'pfsdfs4', name: 'Apple' },
//       { id: 'p5fsdfsd', name: 'Banana' },
//       { id: 'pfsdfs6', name: 'Orange' },
//     ],
//   },
//   {
//     id: 'sfsdfs',
//     title: 'Cloth',
//     products: [
//       { id: 'pfsf7', name: 'T-shirt' },
//       { id: 'psdfs8', name: 'Jeans' },
//       { id: 'psfs9', name: 'Socks' },
//     ],
//   },
//   {
//     id: 'fsdfsd',
//     title: 'Bags',
//     products: [
//       { id: 'p1fs0', name: 'T-shfsfsfirt' },
//       { id: 'p1fsdfs1', name: 'Jesfsdfans' },
//       { id: 'p1sdfsd2', name: 'sfsf' },
//     ],
//   },
// ]

export default function KanbanBoard() {
  const [updateProduct] = useUpdateProductMutation();

  const { data: categoryData } = useGetAllCategoryQuery({});

  const initialData = categoryData?.data?.map((category: any) => {
    return {
      id: category?._id,
      title: category?.name,
      products: category?.products?.map((product: any) => {
        return {
          id: product?._id,
          name: product?.description,
        };
      }),
    };
  });

  const moveProduct = (
    productId: string,
    fromCategoryId: string,
    toCategoryId: string
  ) => {
    const arg = {
      id: productId,
      data: { category: toCategoryId },
    };

    console.log(arg);

    updateProduct(arg);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className="text-center text-3xl font-extrabold">Categories</h1>
      <div className="flex  p-4 items-start justify-center flex-wrap max-w-[1200px] gap-5 mx-auto px-5">
        {initialData?.map((category: CategoryType) => (
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
  );
}
