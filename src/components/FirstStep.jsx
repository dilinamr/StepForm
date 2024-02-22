import { TextField, Button, Grid } from "@mui/material";

const FirstStep = () => {
  const handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault(); // Prevents the form from reloading the page
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="First name"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="firstName"
            aria-label="First name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Last name"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="lastName"
            aria-label="Last name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Email"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="email"
            aria-label="Email"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Phone Number"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="phoneNumber"
            aria-label="Phone Number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Password"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="password"
            aria-label="Password"
            type="password"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Confirm Password"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="confirmPassword"
            aria-label="Confirm Password"
            type="password"
          />
        </Grid>
        <Grid item xs={12} className="text-right">
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FirstStep;
