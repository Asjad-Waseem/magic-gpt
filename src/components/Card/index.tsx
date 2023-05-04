import { Card, Box } from "@mui/material";
import clsx from "clsx";

import { CardProps } from "./types";

const CardComponent = ({
  card,
  optionalClassBox,
  optionalClassCard,
  borderRadiusClass,
}: CardProps): JSX.Element => {
  return (
    <Box className={optionalClassBox}>
      <Card
        sx={{
          minWidth: 275,
          width: "40%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px 20px 10px 20px",
        }}
        className={clsx(borderRadiusClass, optionalClassCard)}
      >
        {card}
      </Card>
    </Box>
  );
};
export default CardComponent;
