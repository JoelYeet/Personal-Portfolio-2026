"use client";

import Lottie from "lottie-react";
import logoPulse from "../public/documents/LogoPulse.json";

type LottieAnimationProps = {
  className?: string;
};

export function LottieAnimation({ className }: LottieAnimationProps) {
  return (
    <Lottie
      animationData={logoPulse}
      autoplay
      loop={false}
      className={className}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid meet",
      }}
    />
  );
}
