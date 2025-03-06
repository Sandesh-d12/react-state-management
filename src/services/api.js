import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com/',
  // prepareHeaders: (headers, { getState }) => {
  //   const token = getState().auth.token
  //   if (token) {
  //     headers.set('authentication', `Bearer ${token}`)
  //   }
  //   return headers
  // },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({

  reducerPath: 'homeSlice',
  baseQuery: baseQueryWithRetry,
 
  tagTypes: ['get'],

  endpoints: () => ({}),
})


