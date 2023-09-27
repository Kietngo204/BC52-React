import { createSlice } from "@reduxjs/toolkit";

const busTicketSlice = createSlice({
  name: "busTicket",
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      // Cách 1:
      //   const { isSelected, ...seat } = action.payload;
      //   if (isSelected) {
      //     const selectedSeats = [...state.selectedSeats, seat];
      //     const totalPrice = state.totalPrice + seat.price;
      //     return { ...state, selectedSeats, totalPrice };
      //   }
      //   const selectedSeats = state.selectedSeats.filter(
      //     (item) => item.id !== seat.id
      //   );
      //   return { ...state, selectedSeats };

      // Cách 2:
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        state.selectedSeats.push(seat);
        state.totalPrice += seat.price;
      } else {
        const index = state.selectedSeats.findIndex(
          (item) => item.id === seat.id
        );
        state.selectedSeats.splice(index, 1);
        state.totalPrice -= seat.price;
      }
    },
    removeSeat: (state, action) => {
      // Cách 1: immutable
      //   const seatId = action.payload;
      //   const selectedSeats = state.selectedSeats.filter(
      //     (item) => item.id !== seatId
      //   );
      //   const totalPrice = selectedSeats.reduce((result, item) => {
      //     return result + item.price;
      //   }, 0);
      //   return { ...state, selectedSeats, totalPrice };

      // Cách 2: mutable
      const seatId = action.payload;
      const index = state.selectedSeats.findIndex((item) => item.id === seatId);
      state.selectedSeats.splice(index, 1);
      state.totalPrice = state.selectedSeats.reduce((result, item) => {
        return result + item.price;
      }, 0);
    },
  },
});

export const { selectSeat, removeSeat } = busTicketSlice.actions;

export default busTicketSlice.reducer;
