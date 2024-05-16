import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface School {
  schoolId:number;
  schoolName: string
}

export interface SelectedSchoolState {
  schoolId:number;
  schoolName: string
}

const initialState: SelectedSchoolState = {
  schoolId: 0,
  schoolName:""
}

export const selectedSchoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    selectSchool: (state, action: PayloadAction<School>) => {
      state.schoolId = action.payload.schoolId;
      state.schoolName = action.payload.schoolName
    },   
    resetSchool:(state) => initialState
  },
})

// Action creators are generated for each case reducer function
export const { selectSchool, resetSchool } = selectedSchoolSlice.actions
//@ts-ignore
export const selectedSchool = (state) => state.school;
export default selectedSchoolSlice.reducer