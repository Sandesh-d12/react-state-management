import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState: {
    data:[],
  },
  reducers: {
    setData:(state, action) => {
      console.log(state)
      console.log('action',action)
        state.data = action.payload
        console.log(state.data)

    },
  },

});

export const { setData } = homeSlice.actions;
export default homeSlice.reducer;
