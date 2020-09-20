import { AsyncThunkPayloadCreator, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../config/store';
import API from '../../api'

type UserType = {
    username: string;
    lastName: string;
    firstName: string;
    email: string;
}

interface authState {
  user: any;
  loading: string;
  error: any;
}

const initialState: authState = {
    user: null,
    loading: 'idle',
    error: null
};

export const login = createAsyncThunk(
    'auth/login',
    async ({username, password}: any, {rejectWithValue} ) => {
        const response = await API.post(
            'auth/login',
            {username, password}
        )
        return response.data;
    }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      
  },
  extraReducers: (builder) => {
      builder.addCase(
          login.pending,
          (state, action) => {
              console.log(action);
              state.loading = 'pending';
          }
      ).addCase(
          login.fulfilled,
          (state, action) => {
              console.log(action);
          }
      ).addCase(
          login.rejected,
          (state, action) => {
              console.log(action);
          }
      )
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
