import { REMOVE_SEAT, SELECT_SEAT } from "../constants/busTicketConstants";

// action creator: 1 hàm return về redux action
// Sử dụng: selectSeat({...})
export const selectSeat = (seat) => {
  return {
    type: SELECT_SEAT,
    payload: seat,
  };
};

export const removeSeat = (seatId) => {
  return {
    type: REMOVE_SEAT,
    payload: seatId,
  };
};
