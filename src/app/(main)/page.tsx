"use client";
import { useGetAllCategoryQuery } from "@/redux/api/category/categoryApi";
import React from "react";

type CategoryType = {
  id: string;
  title: string;
  products: number;
};

function App() {
  const { data: categoryData } = useGetAllCategoryQuery({});

  const initialData = categoryData?.data?.map((category: any) => {
    return {
      id: category?._id,
      title: category?.name,
      products: category?.products?.length,
    };
  });

  return (
    <div className="pt-72 ml-72">
      <div className="p-5">
        <h3>Categories</h3>
        <div>
          <table>
            <tbody>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Total Products</th>
              </tr>
              {initialData?.map((category: CategoryType, index: number) => {
                return (
                  <tr key={category?.id}>
                    <td>{index + 1}</td>
                    <td>{category?.title}</td>
                    <td>{category?.products}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
