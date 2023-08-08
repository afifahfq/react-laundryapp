import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const apiHeaders = {
  'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTAzNTc4Mzd9.ILF698ktm1Zw_ssLXsmCAMAGEz3_LIVA3_XWXcHWK0k',
};

const baseUrl = 'https://belaundry-api.sebaris.link/platform/'

const createRequest = (url) => ({ url, headers: apiHeaders });

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProductsReport: builder.query({
      query: (count) => createRequest(`/product/report`),
    }),

    getProductsCategory: builder.query({
      query: () => createRequest(`/product/categories`),
    }),

    addProduct: builder.mutation({
      query: (payload) => ({
        url: '/product',
        method: 'POST',
        body: payload,
        headers: apiHeaders,
      }),
      invalidatesTags: ['Post'],
    }),

    login: builder.mutation({
      query: (payload) => ({
        url: '/user/sign-in',
        method: 'POST',
        body: payload,
        headers: apiHeaders,
      }),
      invalidatesTags: ['Post'],
    }),

    register: builder.mutation({
      query: (payload) => ({
        url: '/user/sign-up',
        method: 'POST',
        body: payload,
        headers: apiHeaders,
      }),
      invalidatesTags: ['Post'],
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    // login: builder.query({
    //   query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    // }),

    // // Note: To access this endpoint you need premium plan
    // getExchanges: builder.query({
    //   query: () => createRequest('/exchanges'),
    // }),
  }),
});

export const {
  useGetProductsReportQuery, useGetProductsCategoryQuery, useAddProductMutation, useLoginMutation, useRegisterMutation
} = serviceApi;
