import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../../config.json";

export const getPageThunk = createAsyncThunk(
  "get/page",
  async (pageNumber, { rejectWithValue, getState }) => {
    const state = getState();
    if (state.pages.pagesUrl[pageNumber - 1]) {
      return {
        page_number: pageNumber,
        image: state.pages.pagesUrl[pageNumber - 1],
      };
    } else {
      try {
        const res = await axios.get(
          `${apiUrl}/pages?page_number=${pageNumber}`
        );

        if (res.status === 200) {
          return res.data.item;
        }
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    pagesUrl: Array.from({length:604},v=> v = null),
    loading: false,
  },
  reducers: {
    stopLoading : (state) => {
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPageThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPageThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.pagesUrl[action.payload.page_number - 1] = action.payload.image;
    });
    builder.addCase(getPageThunk.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
      state.loading = false;
    });
  },
});
