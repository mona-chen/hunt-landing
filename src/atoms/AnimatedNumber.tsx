import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";

export default function AnimatedNumber({value}: {value:string | number}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Component mounted");
    // return () => console.log("Component unmounted");
  }, []);

  const [number, setNumber] = useState(0)

  useEffect(() => {
    // setNumber(value as number)
  }, [value])
  return (
  );
}
