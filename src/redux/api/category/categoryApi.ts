import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (payload) => ({
        url: "/category/add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["category"],
    }),
    updateCategory: builder.mutation({
      query: (arg) => ({
        url: "/category/updata/" + arg?.id,
        method: "patch",
        body: arg.data,
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: "/category/delete/" + id,
        method: "delete",
      }),
      invalidatesTags: ["category"],
    }),
    getAllCategory: builder.query({
      query: () => ({
        url: "/category/",
        method: "get",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
} = categoryApi;
