import { apiSlice } from './apiSlice';

export const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTodo: builder.mutation({
      query: (data) => ({
        url: '/todo-items',
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: [{ type: 'Todo' }],
    }),
    getTodoByGroup: builder.query({
      query: (id) => `/todo-items?activity_group_id=${id}`,
      providesTags: (result) => {
        if (result?.ids) {
          return [
            { type: 'Todo', id: 'TD' },
            ...result.ids.map((data) => ({ type: 'Todo', id })),
          ];
        } else return [{ type: 'Todo', id: 'TD' }];
      },
    }),
    getTodoDetail: builder.query({
      query: (id) => `/todo-items/${id}`,
    }),
    updateTodo: builder.mutation({
      query: (id, data) => ({
        url: `/todo-items/${id}`,
        method: 'PATCH',
        body: { ...data },
      }),
      invalidatesTags: [{ type: 'Todo' }],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todo-items/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todo' }],
    }),
  }),
});

export const {
  useCreateTodoMutation,
  useGetTodoByGroupQuery,
  useGetTodoDetailQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApiSlice;
