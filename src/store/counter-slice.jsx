import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { status: "idle", count: 0 };

function customFlat(arr, output = []) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      customFlat(arr[i], output);
    } else {
      output.push(arr[i]);
    }
  }

  return output;
}

const asyncAPI = (amount) => {
  console.log(customFlat([1, [2], [[3]], [[[4]]]]));
  new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => {
        resolve({ count: amount });
      }, 2000);
    } else {
      setTimeout(() => {
        reject();
      }, 3000);
    }
  });
};

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
      })
      .addCase(incrementedAsync.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export const { incremented, decremented, reset, incrementedBy } =
  counterSlice.actions;
export default counterSlice.reducer;
