import Box from "@mui/material/Box";

export interface SpacerProps {
  height: string;
}

function Spacer({ height }: SpacerProps) {
  return <Box sx={{ height: height }} />;
}

export default Spacer;
