import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";

const MuiButton = () => {
  return (
    <Stack spacing={6}>
      <Stack spacing={4} direction={"row"}>
        <Button variant="contained"> contained Button</Button>
        <Button variant="outlined"> outlined Button</Button>
        <Button variant="text"> text Button</Button>
      </Stack>

      <Stack display={"block"} spacing={4} direction={"row"}>
        <Button size="small" variant="contained" color="primary"> contained Button</Button>
        <Button size ="medium" variant="contained" color="error"> outlined Button</Button>
        <Button size ="large" variant="contained" color="warning"> text Button</Button>
      </Stack>

      <Stack display={"block"} spacing={4} direction={"row"}>
        <ButtonGroup variant="outlined" orientation="vertical">
        <Button  color="primary"> contained Button</Button>
        <Button  color="error"> outlined Button</Button>
        <Button   color="warning"> text Button</Button>
        </ButtonGroup>
        
      </Stack>
    </Stack>
  );
};

export default MuiButton;
