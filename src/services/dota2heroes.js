// disini kita kaan import dari redux toolkit
// yaitu createAPI dan fetchBaseQuery

//perhatikan fromnya cukup berbeda dadri yang sebelah
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Selanjutnya kita akan membuat APInya di sini
export const dota2heroes = createApi({
  // Anggap saja ini seperti "name" pada slice
  reducerPath: "dota2heroes",
  // di sini kita akan memberikan opsi baseUrl
  // Karena kita akan menggunakan API nya dari https://reqresin/api <--- ini adalah baseUrl nya
  baseQuery: fetchBaseQuery({
    // di sini kita akan memberikan opsi baseUrl
    // Karena kita akan menggunakan API nya dari https://reqresin/api <--- ini adalah baseUrl nya
    baseUrl: "https://api.opendota.com/api/",
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set("api_key_dota", "aaf7f02e-1574-496d-b38d-fea3531b8912");
    //   //   const token = getState().auth.token;

    //   //   if (token) {
    //   //     headers.set(`api_key_dota`, "aaf7f02e-1574-496d-b38d-fea3531b8912");
    //   //   }
    //   return headers;
    // },
    params: {
      api_key_dota: "aaf7f02e-1574-496d-b38d-fea3531b8912",
    },
  }),

  endpoints: (builder) => ({
    heroStats: builder.query({
      query: () => "/heroStats",
    }),

    heroById: builder.query({
      query: (id) => `hero/${id}`,
    }),
  }),
});

export const { useHeroStatsQuery, useHeroByIdQuery } = dota2heroes;
