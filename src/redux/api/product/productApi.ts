import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "/product/add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["category", "product"],
    }),
    updateProduct: builder.mutation({
      query: (arg) => ({
        url: "/product/update/" + arg?.id,
        method: "put",
        body: arg.data,
      }),
      invalidatesTags: ["category", "product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: "/product/delete/" + id,
        method: "delete",
      }),
      invalidatesTags: ["category", "product"],
    }),
    getAllProduct: builder.query({
      query: () => ({
        url: "/product/",
        method: "get",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetAllProductQuery,
} = productApi;
