import { api } from './api'

 const getApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => "posts", 
      providesTags: (result, error, {entityName}) =>
        result ? [...result.map(({ id }) => ({ type: "posts", id })), { type: "posts", id: 'LIST' }]
      : [{ type: "posts", id: 'LIST' }], 
    }),
  }),
})

export const { useGetPostsQuery } = getApi


// async onQueryStarted(props, {queryFulfilled, dispatch}) {
//   const {data: newUser} = await queryFulfilled;

//  const entries = apiSlice.util.selectInvalidatedBy(store.getState(), ["Users"]);

//  //each entry will be an object containing endpointName , originalArgs and queryCacheKey
// //so right here you decide in which entry you want to add the new user. Lets assume we add him to the first entry

//  const {originalArgs} = entries[0];

//   const patchCollection = dispatch(
//       apiSlice.util.updateQueryData('listAllUsers', originalArgs, (draft) => {
//           draft.users.splice(0, 0, {...newUser.admin, nickname: newUser.admin.name});
//       }),
//   );

//   queryFulfilled.catch(patchCollection.undo);
// },