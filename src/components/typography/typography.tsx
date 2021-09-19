import React from "react";

import { Card, CardHeader, Typography } from "@mui/material";

// ----------

export const TypographyPaper = (): JSX.Element => {
  return (
    <Card>
      <CardHeader title="test" titleTypographyProps={{ variant: "overline" }} />
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body1">
        body1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
      </Typography>
      <Typography variant="body2">
        body2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
      </Typography>
      <Typography variant="overline">Overline (Pretitle)</Typography>
    </Card>
  );
};
