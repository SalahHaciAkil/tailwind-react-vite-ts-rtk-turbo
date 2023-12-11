import { SERVER_URL } from "@/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = localStorage.getItem("auth");
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ["RTK_USER"],
  endpoints: (builder) => ({}),
  // extractRehydrationInfo: {
  // keepUnusedDataFor?: number; // value is in seconds
  // refetchOnMountOrArgChange?: boolean | number; // value is in seconds
  // refetchOnFocus?: boolean; // If you specify this option alongside skip: true, this will not be evaluated until skip is false.
  // refetchOnReconnect?: boolean; //If you specify this option alongside skip: true, this will not be evaluated until skip is false.
  // }
});
