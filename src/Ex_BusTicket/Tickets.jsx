import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSeat } from "../redux/slices/busTicketSlice";
// import { removeSeat } from "../redux/actions/busTicketActions";

export default function Tickets() {
  const dispatch = useDispatch();

  const { selectedSeats } = useSelector((state) => {
    return state.busTicket;
  });

  const handleRemove = (seatId) => {
    // dispatch({ type: "removeSeat", payload: seatId });
    dispatch(removeSeat(seatId));
  };
  return (
    <div>
      <h3>Danh sách vé đang chọn</h3>
      {selectedSeats.map((item) => {
        return (
          <div className=" mb-2" key={item.id}>
            <span>
              {item.name} - {item.price}$
            </span>
            <button
              className="btn btn-danger ms-2"
              onClick={() => {
                handleRemove(item.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
