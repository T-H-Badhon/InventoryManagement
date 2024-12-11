"use client";
import KanbanBoard from "@/components/KanbanBoard";
import { useAddCategoryMutation } from "@/redux/api/category/categoryApi";
import React, { useState } from "react";
import { toast } from "sonner";

const Categorypage = () => {
  const [categoryName, setCategoryName] = useState("");

  const [addCategory] = useAddCategoryMutation();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      toast.warning("Category name cannot be empty.");
      return;
    }

    const res = await addCategory({ name: categoryName });

    if (res?.data?.success) {
      toast.success("Category added successfully");
      setCategoryName("");
    } else {
      toast.error(
        (res as any)?.error?.errorMessage || (res as any)?.error?.status
      );
    }
  };

  return (
    <div className="pt-20 pl-[40px] shadow-md">
      <div className=" flex items-center justify-center ">
        <div className="w-full  bg-white p-6 rounded-lg ">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            Add Category
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className="md:flex items-center justify-center gap-3 max-w-[500px] mx-auto"
          >
            <div className="mb-4 min-w-[300px]">
              <label
                htmlFor="categoryName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category Name
              </label>
              <input
                type="text"
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter category name"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition text-nowrap"
            >
              Add Category
            </button>
          </form>
        </div>
      </div>

      {/* // */}
      <KanbanBoard />
    </div>
  );
};

export default Categorypage;
