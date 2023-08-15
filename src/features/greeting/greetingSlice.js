import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: {},
  isLoading: false,
  error: undefined,
};

export const getGreeting = createAsyncThunk('greeting/random', async () => {
  const greeting = await axios.get('http://localhost:3000');
  return await greeting.data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
    });
    builder.addCase(getGreeting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action);
    });
  },
});

export default greetingSlice.reducer;
