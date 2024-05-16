import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Student {
  allergies: string,
  email: string,
  firstName: string,
  id: number,
  lastName: string,
  spendLimit:number,
  balance: number,
  imgSrc: string,
  noSpendLimitSet:boolean
}

export interface SelectedStudentState {
  studentId: number,
  firstName: string,
  lastName: string,
  spendLimit: number,
  balance: number,
  allergies: string,
  email: string,
  imgSrc:string,
  noSpendLimitSet:boolean
}

const initialState: SelectedStudentState = {
  studentId: 0,
  firstName: '',
  spendLimit: 0,
  lastName: '',
  balance:0,
  email:'',
  allergies:'',
  imgSrc:'',
  noSpendLimitSet:false
}

export const selectedStudentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    selectStudent: (state, action: PayloadAction<Student>) => {
      state.studentId = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.spendLimit = action.payload.spendLimit;
      state.balance = action.payload.balance;
      state.allergies = action.payload.allergies;
      state.email = action.payload.email;
      state.imgSrc = action.payload.imgSrc;
      state.noSpendLimitSet = action.payload.noSpendLimitSet
    },
    removeStudent:(state) => {  
      state.studentId = 0;
      state.firstName = "";
      state.lastName = "";
      state.spendLimit = 0;
      state.balance = 0;
      state.imgSrc = "";
      state.email = "";
      state.allergies = "";
      state.noSpendLimitSet = false;
    },
    resetStudentData:(state) => initialState
  },
})

// Action creators are generated for each case reducer function
export const { selectStudent, resetStudentData, removeStudent } = selectedStudentSlice.actions
//@ts-ignore
export const selectSelectedStudent = (state) => state.student;
export default selectedStudentSlice.reducer