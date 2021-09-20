import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography
} from "@mui/material";

// ----------

export const TypographyPaper = (): JSX.Element => {
  return (
    <Card>
      <CardHeader
        title="Typography"
        titleTypographyProps={{ variant: "overline", color: "text.secondary" }}
      />
      <CardContent sx={{ paddingTop: "0px" }}>
        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Headers
        </Divider>
        <Typography sx={{ paddingBottom: "1rem" }} variant="h1">
          Heading 1
        </Typography>
        <Typography sx={{ paddingBottom: "1rem" }} variant="h2">
          Heading 2
        </Typography>
        <Typography sx={{ paddingBottom: "1rem" }} variant="h3">
          Heading 3
        </Typography>
        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Body
        </Divider>
        <Typography
          sx={{ paddingBottom: "1rem", fontWeight: "bold" }}
          variant="body1"
        >
          Body 1 (M, bold)
        </Typography>
        <Typography sx={{ paddingBottom: "1rem" }} variant="body1">
          Body 1 (M, normal)
        </Typography>
        <Typography
          sx={{
            paddingBottom: "1rem",
            fontWeight: "normal",
            fontStyle: "italic"
          }}
          variant="body1"
        >
          Body 1 (M, italic)
        </Typography>
        <Typography
          sx={{ paddingBottom: "1rem", fontWeight: "bold" }}
          variant="body2"
        >
          Body 2 (S, bold)
        </Typography>
        <Typography sx={{ paddingBottom: "1rem" }} variant="body2">
          Body 2 (S, normal)
        </Typography>
        <Typography
          sx={{
            paddingBottom: "1rem",
            fontWeight: "normal",
            fontStyle: "italic"
          }}
          variant="body2"
        >
          Body 2 (S, italic)
        </Typography>
        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Misc
        </Divider>
        <Typography
          sx={{ paddingBottom: "1rem" }}
          variant="button"
          component="p"
        >
          Button
        </Typography>
        <Typography variant="overline" component="p">
          Overline (Pretitle)
        </Typography>
      </CardContent>
    </Card>
  );
};
