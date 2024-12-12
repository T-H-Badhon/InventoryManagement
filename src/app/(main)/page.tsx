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

  let totalProduct=0

  const initialData = categoryData?.data?.map((category: any) => {
    totalProduct= totalProduct+ (category?.products?.length || 0)
    return {
      id: category?._id,
      title: category?.name,
      products: category?.products?.length,
    };
  });


  return (
    <div className="md:pt-20 pt-20 ">
      <div>
        <h1 className="px-5 py-8 sm:text-xl font-semibold text-red-300">Welcome to Swapno Inventory Management System</h1>
      </div>
      <div className="mx-auto w-fit flex flex-col  sm:flex-row items-center gap-3 mt-5">
      <div className=" w-[200px] h-[24] bg-red-200 p-5 rounded-lg space-y-3">
          <h1>Total Category</h1>
          <h1 className="text-3xl font-semibold">{initialData?.length || 0}</h1>
        </div>
        <div className=" w-[200px] h-[24] bg-red-200 p-5 rounded-lg space-y-3">
          <h1>Total Products</h1>
          <h1 className="text-3xl font-semibold">{totalProduct}</h1>
        </div>
        
      </div>
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
