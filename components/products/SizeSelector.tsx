import { Box, Button } from "@mui/material";
import { FC } from "react";
import { ISizes } from "../../interfaces";

interface Props {
  selectedSize?: ISizes;
  sizes: ISizes[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {
        sizes.map( size => (
          <Button
            key={ size }
            size='small'
            color = {size === selectedSize ? 'primary' : 'info'}
          >
            { size }
          </Button>
        ))
      }
    </Box>
  )
}
