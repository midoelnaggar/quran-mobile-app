import { createSlice } from "@reduxjs/toolkit";
import suras from "../../content/suras.json";

const currentReadingSlice = createSlice({
  name: "currentReading",
  initialState: {
    page: 1,
    pages: [1, 1],
    suraNumber: 1,
    suraName: "الفاتحة",
    reader: "husary",
  },
  reducers: {
    changeSura: (state, action) => {
      state.suraNumber = action.payload;
      state.suraName = suras[state.suraNumber - 1].name_arabic;
      let currentPages = suras[action.payload - 1].pages;
      state.pages = currentPages;
      state.page = currentPages[0];
      return state;
    },
    nextPage: (state) => {
      if (state.page === state.pages[1]) {
        if (state.suraNumber < suras.length) {
          state.suraNumber++;
          state.suraName = suras[state.suraNumber - 1].name_arabic
          let currentPages = suras[state.suraNumber - 1].pages;
          state.pages = currentPages;
        }
      }
      if (state.page < suras[suras.length - 1].pages[1]) {
        state.page++;
      }
      return state;
    },
    prevPage: (state) => {
      if (state.page === state.pages[0]) {
        if (state.suraNumber > 1) {
          state.suraNumber--;
          state.suraName = suras[state.suraNumber - 1].name_arabic

          let currentPages = suras[state.suraNumber - 1].pages;
          state.pages = currentPages;
        }
      }
      if (state.page > 1) {
        state.page--;
      }
      return state;
    },
  },
});

export default currentReadingSlice;
