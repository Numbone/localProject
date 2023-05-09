import { Typography } from "@mui/material";
import React from "react";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" component={"h4"}>
        h1
      </Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle1</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        quibusdam, nisi dolore aliquam dicta sint nihil? Exercitationem est
        nostrum quasi quia! Quaerat tempore laudantium velit iusto voluptatum
        eligendi exercitationem eum?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
        facilis dolores unde aperiam possimus labore est corporis ad, facere
        dignissimos modi reprehenderit, eius, dolor omnis optio repudiandae vero
        vel repellat?
      </Typography>
    </div>
  );
};

export default MuiTypography;
