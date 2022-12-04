import React from "react";
import { Box } from "@mui/material";

interface Props {
  size: string;
  position: string;
}

function Spacer({ position, size }: Props) {
  const sizeVariant = {
    xs: 0.5,
    s: 1,
    m: 2,
    l: 3,
    xl: 4,
    xxl: 8,
    xxxl: 12,
  };

  type sizeObjectKey = keyof typeof sizeVariant;

  const sizeIndex = sizeVariant[size as sizeObjectKey];

  const positionVariant = {
    top: "marginTop",
    left: "marginLeft",
    right: "marginRight",
    bottom: "marginBottom",
  };

  type positionObjectKey = keyof typeof positionVariant;

  const positionIndex = positionVariant[position as positionObjectKey];

  switch (positionIndex) {
    case "marginLeft":
      return <Box sx={{ marginLeft: sizeIndex }} />;
    case "marginRight":
      return <Box sx={{ marginRight: sizeIndex }} />;
    case "marginBottom":
      return <Box sx={{ marginBottom: sizeIndex }} />;
    default:
      return <Box sx={{ marginTop: sizeIndex }} />;
  }
}

export default Spacer;
