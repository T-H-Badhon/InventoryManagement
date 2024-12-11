import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (payload) => ({
        url: "/category/add",
        method: "POST",
        body: payload,
      }),
    }),
    updateCategory: builder.mutation({
      query: (arg) => ({
        url: "/category/updata/" + arg?.id,
        method: "patch",
        body: arg.data,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: "/category/delete/" + id,
        method: "delete",
      }),
    }),
    getAllCategory: builder.query({
      query: () => ({
        url: "/category/",
        method: "get",
      }),
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
} = categoryApi;
