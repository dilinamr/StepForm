import { Button, Grid, TextField } from "@mui/material";

const SecondStep = () => {
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
            label="Brand Name"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="brandName"
            aria-label="Brand Name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Brand Type"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="brandType"
            aria-label="Brand Type"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Street Address"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="streetAddress"
            aria-label="Street Address"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="City"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="city"
            aria-label="City"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Zip Code"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="zipCode"
            aria-label="Zip Code"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Tax ID Number"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="taxIdNumber"
            aria-label="Tax ID Number"
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

export default SecondStep;
