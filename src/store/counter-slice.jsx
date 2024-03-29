import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { status: "idle", count: 0 };

const asyncAPI = (amount) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ count: amount });
    }, 2000);
  });

export const incrementedAsync = createAsyncThunk(
  "counter/incrementedAsync",
  async (amount) => {
    const response = await asyncAPI(amount);

    return response.count;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.count++;
    },
    decremented(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    incrementedBy(state, action) {
      state.count += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementedAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementedAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.count += action.payload;
      });
  },
});

export const { incremented, decremented, reset, incrementedBy } =
  counterSlice.actions;
export default counterSlice.reducer;
