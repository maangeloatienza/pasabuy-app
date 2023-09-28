import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadingUser(state,action){
      return {
        ...state,
        loading: true
      }
    },
    setUser(state,action){
      return {
        ...state,
        loading: false,
        user : action.payload
      }
    }
  }
})

const { actions } = userSlice

export const {setUser} = actions
export default userSlice.reducer