import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Button,
  IconButton
} from "@mui/material";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";

// ----------

export const ButtonCard = (): JSX.Element => {
  return (
    <Card>
      <CardHeader
        title="Buttons"
        titleTypographyProps={{ variant: "overline" }}
      />
      <CardContent sx={{ paddingTop: "0" }}>
        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Primary
        </Divider>
        {/* Large */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button size="large" variant="contained" color="primary">
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="large"
              variant="contained"
              color="primary"
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="large"
              variant="contained"
              color="primary"
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <IconButton size="large" color="primary">
              <AccountBalanceWalletRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
        {/* Medium */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button variant="contained" color="primary">
              Medium
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="primary"
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Medium
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="primary"
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Medium
            </Button>
          </Grid>
          <Grid item xs="auto">
            <IconButton color="primary">
              <AccountBalanceWalletRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
        {/* Small */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button size="small" variant="contained" color="primary">
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="small"
              variant="contained"
              color="primary"
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="small"
              variant="contained"
              color="primary"
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <IconButton size="small" color="primary">
              <AccountBalanceWalletRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Secondary
        </Divider>
        {/* Large */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button size="large" variant="outlined" color="secondary">
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <IconButton size="large" color="secondary">
              <AccountBalanceWalletRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
        {/* Medium */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button variant="outlined" color="secondary">
              Medium
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Medium
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Medium
            </Button>
          </Grid>
          <Grid item xs="auto">
            <IconButton color="secondary">
              <AccountBalanceWalletRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
        {/* Small */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button size="small" variant="outlined" color="secondary">
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <IconButton size="small" color="secondary">
              <AccountBalanceWalletRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Text
        </Divider>
        {/* Large */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button size="large" variant="text" color="primary">
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="large"
              variant="text"
              color="primary"
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="large"
              variant="text"
              color="primary"
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Large
            </Button>
          </Grid>
        </Grid>
        {/* Medium */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button variant="text">Medium</Button>
          </Grid>
          <Grid item xs="auto">
            <Button variant="text" endIcon={<ExpandMoreRoundedIcon />}>
              Medium
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button variant="text" startIcon={<ExpandMoreRoundedIcon />}>
              Medium
            </Button>
          </Grid>
        </Grid>
        {/* small */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button size="small" variant="text" color="primary">
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="small"
              variant="text"
              color="primary"
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="small"
              variant="text"
              color="primary"
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Small
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ paddingBottom: "1rem", color: "text.secondary" }}>
          Disabled
        </Divider>
        {/* Large */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button size="large" variant="contained" disabled>
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="large"
              variant="contained"
              disabled
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="large"
              variant="contained"
              disabled
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Large
            </Button>
          </Grid>
          <Grid item xs="auto">
            <IconButton size="large" disabled>
              <AccountBalanceWalletRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
        {/* Medium */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button variant="contained" disabled>
              Medium
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              disabled
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Medium
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              disabled
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Medium
            </Button>
          </Grid>
          <Grid item xs="auto">
            <IconButton disabled>
              <AccountBalanceWalletRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
        {/* Small */}
        <Grid container spacing={4} sx={{ paddingBottom: "1rem" }}>
          <Grid item xs="auto">
            <Button size="small" variant="contained" disabled>
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="small"
              variant="contained"
              disabled
              endIcon={<ExpandMoreRoundedIcon />}
            >
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button
              size="small"
              variant="contained"
              disabled
              startIcon={<ExpandMoreRoundedIcon />}
            >
              Small
            </Button>
          </Grid>
          <Grid item xs="auto">
            <IconButton size="small" disabled>
              <AccountBalanceWalletRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
