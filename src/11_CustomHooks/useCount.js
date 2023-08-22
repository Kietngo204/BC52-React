import { useState } from "react";

export default function useCount() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return { count, handleIncrease, handleDecrease };
}
