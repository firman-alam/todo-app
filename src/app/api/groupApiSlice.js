import { apiSlice } from './apiSlice';

export const groupApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createGroup: builder.mutation({
      query: (data) => ({
        url: '/activity-groups',
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: [{ type: 'Group' }],
    }),
    getGroups: builder.query({
      query: () => `/activity-groups?email=aladiat046@gmail.com`,
      providesTags: (result) => {
        if (result?.ids) {
          return [
            { type: 'Group', id: 'AG' },
            ...result.ids.map((data) => ({ type: 'Group', id })),
          ];
        } else return [{ type: 'Group', id: 'AG' }];
      },
    }),
    getOneGroup: builder.query({
      query: (id) => `/activity-groups/${id}`,
      providesTags: (result) => {
        if (result?.ids) {
          return [
            { type: 'Group', id: 'AG' },
            ...result.ids.map((data) => ({ type: 'Group', id })),
          ];
        } else return [{ type: 'Group', id: 'AG' }];
      },
    }),
    updateGroup: builder.mutation({
      query: (id, data) => ({
        url: `/activity-groups/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: [{ type: 'Group' }],
    }),
    deleteGroup: builder.mutation({
      query: (id) => ({
        url: `/activity-groups/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Group' }],
    }),
  }),
});

export const {
  useCreateGroupMutation,
  useGetGroupsQuery,
  useGetOneGroupQuery,
  useUpdateGroupMutation,
  useDeleteGroupMutation,
} = groupApiSlice;
