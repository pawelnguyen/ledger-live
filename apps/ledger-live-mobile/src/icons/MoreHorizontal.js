// @flow
import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number,
  color: string,
};

export default function ManagerIcon({ size = 16, color }: Props) {
  return (
    <Svg width={size} height={size / 4} viewBox="0 0 16 4" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.90909 1.99996C2.90909 2.80328 2.25787 3.4545 1.45455 3.4545C0.651222 3.4545 0 2.80328 0 1.99996C0 1.19663 0.651222 0.54541 1.45455 0.54541C2.25787 0.54541 2.90909 1.19663 2.90909 1.99996ZM9.45455 1.99996C9.45455 2.80328 8.80332 3.4545 8 3.4545C7.19668 3.4545 6.54545 2.80328 6.54545 1.99996C6.54545 1.19663 7.19668 0.54541 8 0.54541C8.80332 0.54541 9.45455 1.19663 9.45455 1.99996ZM14.5455 3.4545C15.3488 3.4545 16 2.80328 16 1.99996C16 1.19663 15.3488 0.54541 14.5455 0.54541C13.7421 0.54541 13.0909 1.19663 13.0909 1.99996C13.0909 2.80328 13.7421 3.4545 14.5455 3.4545Z"
        fill={color}
      />
    </Svg>
  );
}