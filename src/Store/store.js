import { create } from "zustand";
import { produce } from "immer";

const initialState = {
  userDetails: null,
};

export const useStore = create((set) => ({
  ...initialState,
  setUserDetails(data) {
    set(
      produce((draft) => {
        draft.userDetails = data;
      })
    );
  },
}));
