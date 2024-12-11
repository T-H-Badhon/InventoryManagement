import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "/product/add",
        method: "POST",
        body: payload,
      }),
    }),
    updateProduct: builder.mutation({
      query: (arg) => ({
        url: "/product/updata/" + arg?.id,
        method: "patch",
        body: arg.data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: "/product/delete/" + id,
        method: "delete",
      }),
    }),
    getAllProduct: builder.query({
      query: () => ({
        url: "/product/",
        method: "get",
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetAllProductQuery
} = productApi;
