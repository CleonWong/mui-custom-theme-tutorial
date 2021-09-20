import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  Grid,
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.5rem"
      }}
    >
      <Box
        sx={{
          backgroundColor: props.color,
          width: "100%",
          height: "40px",
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

        <Grid container spacing={2} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs={4}>
            <ColorDisplay color="primary.dark" />
          </Grid>
          <Grid item xs={4}>
            <ColorDisplay color="primary.main" />
          </Grid>
          <Grid item xs={4}>
            <ColorDisplay color="primary.light" />
          </Grid>
        </Grid>

        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Text
        </Divider>
        <Grid container spacing={2} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs={4}>
            <ColorDisplay color="text.primary" />
          </Grid>
          <Grid item xs={4}>
            <ColorDisplay color="text.secondary" />
          </Grid>
          <Grid item xs={4}>
            <ColorDisplay color="text.disabled" />
          </Grid>
        </Grid>

        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Background
        </Divider>
        <Grid container spacing={2} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs={4}>
            <ColorDisplay color="background.default" />
          </Grid>
          <Grid item xs={4}>
            <ColorDisplay color="background.paper" />
          </Grid>
        </Grid>

        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Misc
        </Divider>
        <Grid container spacing={2} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs={4}>
            <ColorDisplay color="success.main" />
          </Grid>
          <Grid item xs={4}>
            <ColorDisplay color="success.contrastText" />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs={4}>
            <ColorDisplay color="warning.main" />
          </Grid>
          <Grid item xs={4}>
            <ColorDisplay color="warning.contrastText" />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs={4}>
            <ColorDisplay color="error.main" />
          </Grid>
          <Grid item xs={4}>
            <ColorDisplay color="error.contrastText" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
