import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  Typography
} from "@mui/material";

// ----------

interface colorDisplayProps {
  color: string;
}

const ColorDisplay = (props: colorDisplayProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.5rem"
      }}
    >
      <Box
        sx={{
          backgroundColor: props.color,
          width: "50px",
          height: "50px",
          borderRadius: "0.5rem"
        }}
      />
      <Typography variant="body1">{props.color}</Typography>
    </Box>
  );
};

export const PaletteCard = (): JSX.Element => {
  return (
    <Card>
      <CardHeader
        title="Palette"
        titleTypographyProps={{ variant: "overline" }}
      />
      <CardContent sx={{ paddingTop: "0" }}>
        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Primary
        </Divider>
        <Box
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
            paddingBottom: "1rem"
          }}
        >
          <ColorDisplay color="primary.dark" />
          <ColorDisplay color="primary.main" />
          <ColorDisplay color="primary.light" />
        </Box>
        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Text
        </Divider>
        <Box
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
            paddingBottom: "1rem"
          }}
        >
          <ColorDisplay color="text.primary" />
          <ColorDisplay color="text.secondary" />
          <ColorDisplay color="text.disabled" />
        </Box>
        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Background
        </Divider>
        <Box
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
            paddingBottom: "1rem"
          }}
        >
          <ColorDisplay color="background.default" />
          <ColorDisplay color="background.paper" />
        </Box>
        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Misc
        </Divider>
        <Box
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
            paddingBottom: "1rem"
          }}
        >
          <ColorDisplay color="success.main" />
          <ColorDisplay color="success.contrastText" />
          <ColorDisplay color="warning.main" />
          <ColorDisplay color="warning.contrastText" />
          <ColorDisplay color="error.main" />
          <ColorDisplay color="error.contrastText" />
        </Box>
      </CardContent>
    </Card>
  );
};
