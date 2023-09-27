import React from "react";
import { useDispatch } from "react-redux";
// import { selectSeat } from "../redux/actions/busTicketActions";
import { selectSeat } from "../redux/slices/busTicketSlice";

export default function SeatItem({ seat, isSelected }) {
  const dispatch = useDispatch();

  // State quản lí trạng thái ghế có đang được chọn hay không
  // const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    // setIsSelected(!isSelected);
    // dispatch({
    //   type: "selectSeat",
    //   payload: { ...seat, isSelected: !isSelected },
    // });
    dispatch(selectSeat({ ...seat, isSelected: !isSelected }));
  };
  let classes = "btn m-2";
  if (seat.isBooked) {
    classes += " btn-danger";
  } else if (isSelected) {
    classes += " btn-success";
  } else {
    classes += " btn-secondary";
  }
  return (
    <button className={classes} disabled={seat.isBooked} onClick={handleSelect}>
      {seat.name}
    </button>
  );
}
