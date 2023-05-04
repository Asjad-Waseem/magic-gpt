import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  RootState,
  // persistor
} from "redux/store";

interface aIGoalsI {
  aIAgentsGoal1: string;
  aIAgentsGoal2?: string;
  aIAgentsGoal3?: string;
  aIAgentsGoal4?: string;
  aIAgentsGoal5?: string;
}

export type homeState = {
  stepNo: number;
  aIName: string;
  aIRole: string;
  aIGoals: aIGoalsI;
};

const initialState: homeState = {
  stepNo: 0,
  aIName: "",
  aIRole: "",
  aIGoals: {
    aIAgentsGoal1: "",
    aIAgentsGoal2: "",
    aIAgentsGoal3: "",
    aIAgentsGoal4: "",
    aIAgentsGoal5: "",
  },
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateStepNo(state, action: PayloadAction<number>) {
      state.stepNo = action?.payload;
    },
    updateAIName(state, action: PayloadAction<string>) {
      state.aIName = action?.payload;
    },
    updateAIRole(state, action: PayloadAction<string>) {
      state.aIRole = action?.payload;
    },
    updateAIGoals(state, action: PayloadAction<aIGoalsI>) {
      state.aIGoals = action?.payload;
    },
    resetHomeState(state) {
      (state.stepNo = 0),
        (state.aIName = ""),
        (state.aIRole = ""),
        (state.aIGoals = {
          aIAgentsGoal1: "",
          aIAgentsGoal2: "",
          aIAgentsGoal3: "",
          aIAgentsGoal4: "",
          aIAgentsGoal5: "",
        });
    },
    // persistor.purge();
  },
});

export const {
  updateStepNo,
  updateAIName,
  updateAIRole,
  updateAIGoals,
  resetHomeState,
} = homeSlice.actions;
export const stepNo = (state: RootState) => state.home.stepNo;
export const aIName = (state: RootState) => state.home.aIName;
export const aIRole = (state: RootState) => state.home.aIRole;
export const aIGoals = (state: RootState) => state.home.aIGoals;

export default homeSlice.reducer;
