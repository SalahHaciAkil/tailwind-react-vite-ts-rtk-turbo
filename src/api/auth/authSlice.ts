import { apiSlice } from "@/api/apiSlice";

// represent the controller
const secondaryUrl = "auth";

export const authExtendedSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `${secondaryUrl}/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["RTK_USER"],
    }),
  }),
});

export const { useLoginMutation } = authExtendedSlice;
