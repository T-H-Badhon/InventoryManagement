"use client";
import ModalWrapper from "@/components/ModalWrapper/ModalWrapper";
import { useGetAllCategoryQuery } from "@/redux/api/category/categoryApi";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
  useUpdateProductMutation,
} from "@/redux/api/product/productApi";
import React, { useState } from "react";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";
import { toast } from "sonner";

const Productpage = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSeletedProduct] = useState("");
  const [selectedCategory, setSeletedCategory] = useState("");

  const [query, setQuery] = useState<{
    searchTerm?: string;
    category?: string;
  }>({});

  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const { data: productData } = useGetAllProductQuery({});

  const products = productData?.data
    ?.map((product: any) => {
      return {
        id: product?._id,
        name: product?.description,
        category: product?.category?.name,
        categoryId: product?.category?._id,
      };
    })
    .filter((product: any) => {
      if (query?.category) {
        return product?.categoryId == query?.category;
      }
      if (query?.searchTerm) {
        return product?.name
          ?.toLowerCase()
          .includes(query?.searchTerm.toLowerCase());
      }
      return true;
    });

  const { data: categoryData } = useGetAllCategoryQuery({});

  const categories = categoryData?.data?.map((category: any) => {
    return {
      id: category?._id,
      title: category?.name,
    };
  });

  return (
    <>
      <div className="pt-20 pl-[40px] shadow-md">
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-3">All Products</h3>

          <div className="flex items-center gap-4">
            <div className="mb-3 flex-1 flex items-center  gap-2">
              <label htmlFor="" className="text-nowrap">
                Search here:
              </label>

              <input
                id="input"
                onChange={(e) => {
                  setQuery({ searchTerm: e.target.value });

                  (
                    document.getElementById("select") as HTMLSelectElement
                  ).value = "";
                }}
                className="w-full border-2 border-red-500 rounded-md pl-3"
                placeholder="Search here..."
              />
            </div>

            <div className="mb-3 flex-1 flex items-center  gap-2">
              <label htmlFor="" className="text-nowrap">
                Search by Category:
              </label>

              <select
                id="select"
                onChange={(e) => {
                  setQuery({ category: e.target.value });
                  (document.getElementById("input") as HTMLInputElement).value =
                    "";
                }}
                className={`mt-1 py-1.5  block w-full text-sm rounded-md border-indigo-700 card-shadow-full focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-70 `}
              >
                <option value="">select a subcategory</option>

                {categories?.map((category: { id: string; title: string }) => {
                  return (
                    <option key={category?.id} value={category?.id}>
                      {category?.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div>
            <table>
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>

                {products?.map(
                  (
                    product: { id: string; name: string; category: string },
                    index: number
                  ) => {
                    return (
                      <tr key={product?.id}>
                        <td>{index + 1}</td>
                        <td>{product?.name}</td>
                        <td>{product?.category}</td>
                        <td>
                          <button
                            onClick={() => {
                              setSeletedProduct(product?.id);
                              setOpen(true);
                            }}
                            className="py-2 px-3 bg-blue-600/30 rounded-lg mr-2"
                          >
                            <AiFillEdit className="text-blue-700 w-5 h-5" />
                          </button>

                          <button
                            onClick={() => {
                              deleteProduct(product?.id).then((res) => {
                                if (res?.data?.success) {
                                  toast.success(
                                    "Product deleted successfully."
                                  );
                                } else {
                                  toast.error("Failed to delete product.");
                                }
                              });
                            }}
                            className="py-2 px-3 bg-red-600/30 rounded-lg"
                          >
                            <FaTrashCan className=" text-red-600 w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ModalWrapper open={open} setOpen={setOpen}>
        <div className=" min-w-[300px] md:min-w-[400px] bg-white p-5 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Update category</h3>

          <div>
            <label htmlFor="subcategory" className="block mb-2 text-sm">
              Category<span className="text-red-500">*</span>
            </label>

            <select
              onChange={(e) => {
                setSeletedCategory(e.target.value);
              }}
              className={`mt-1 py-1.5  block w-full text-sm rounded-md border-indigo-700 card-shadow-full focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-70 `}
            >
              <option value="">select a subcategory</option>

              {categories?.map((category: { id: string; title: string }) => {
                return (
                  <option key={category?.id} value={category?.id}>
                    {category?.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mt-3">
            <button
              onClick={() => {
                updateProduct({
                  id: selectedProduct,
                  data: { category: selectedCategory },
                }).then((res) => {
                  if (res?.data?.success) {
                    toast.success("Category change successfully.");

                    setSeletedProduct("");
                    setOpen(false);
                  } else {
                    toast.error("Failed to change category.");
                    setSeletedCategory("");
                  }
                });
              }}
              className="py-2 px-3 bg-blue-600 rounded-lg text-white font-semibold mr-2"
            >
              Submit
            </button>

            <button
              onClick={() => {
                setOpen(false);
              }}
              className="py-2 px-3 bg-blue-600 rounded-lg text-white font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default Productpage;
