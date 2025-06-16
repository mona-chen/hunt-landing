import NumberFlow from "@number-flow/react";

export default function AnimatedNumber({value}: {value: string | number}) {
  return (
    <NumberFlow value={value} />
  );
}