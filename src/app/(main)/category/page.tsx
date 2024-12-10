"use client";
import React, { useState } from "react";

const Categorypage = () => {
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      setMessage("Category name cannot be empty.");
      return;
    }

    // Handle adding category (e.g., API call or state update)
    console.log("Category Added:", categoryName);
    setMessage(`Category "${categoryName}" added successfully!`);

    // Reset form
    setCategoryName("");
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categorypage;
