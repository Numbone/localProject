import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "shared/store";
import { decrement, increment } from "shared/store/Counter";

const HomePage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [select, setSelect] = useState(0);
  console.log(select)
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction={"row"} spacing={2}>
        <Button variant="contained" aria-label="Increment value" onClick={()=>{dispatch(decrement())}}>-</Button>
        <Typography variant="h6">{count}</Typography>
        <Button variant="contained" onClick={()=>{dispatch(increment())}}>+</Button>
      </Stack>
        {/* <Stack direction={"row"} spacing={2}>
          <Button
            variant="contained"
            aria-label="Increment value"
            onClick={() => {
              setSelect((count) => count - 1);
            }}
          >
            -
          </Button>
          <Typography variant="h6">{select}</Typography>
          <Button
            variant="contained"
            onClick={() => {
              setSelect((count) => count + 1);
            }}
          >
            +
          </Button>
        </Stack> */}
      </Stack>
    </div>
  );
};

export default HomePage;
