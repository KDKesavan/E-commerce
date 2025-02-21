import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/login', userData);
    localStorage.setItem('token', response.data.token); // Save token
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Login failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: JSON.parse(localStorage.getItem('user')) || null, status: 'idle' },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('token'); // Remove token
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
