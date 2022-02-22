import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cars : ['Model S', 'Model 3', 'Model S', 'Model Y', 'Solar Roof', 'Solar Panel']
}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {}
})


export const selectCar = state => state.car.cars;
export default carSlice.reducer;