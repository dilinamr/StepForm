import { useContext, useState } from "react";
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { multiStepContext } from "../StepContext";

const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [errors, setErrors] = useState({});

  const validateStep2 = () => {
    const newErrors = {};

    if (!userData.brandName) {
      newErrors.brandName = "Brand Name is required";
    }

    if (!userData.brandType) {
      newErrors.brandType = "Brand Type is required";
    }

    if (!userData.streetAddress) {
      newErrors.streetAddress = "Street Address is required";
    }

    if (!userData.city) {
      newErrors.city = "City is required";
    }

    if (!userData.zipCode) {
      newErrors.zipCode = "Zip Code is required";
    }

    if (!userData.taxIdNumber) {
      newErrors.taxIdNumber = "Tax ID Number is required";
    } else if (!/^\d{3}-\d{2}-\d{4}$/.test(userData.taxIdNumber)) {
      newErrors.taxIdNumber = "Invalid Tax ID Number. Format: xxx-xx-xxxx";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const saveDataToLocalStorage = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const handleNext = () => {
    const isValid = validateStep2();

    if (isValid) {
      saveDataToLocalStorage();
      setStep(2);
      setUserData({});
    }
  };

  return (
    <form>
      <Grid container>
        <div className="heading">
          <h1>Business Information</h1>
          <p>Please,enter information about your company</p>
        </div>
      </Grid>
      <Grid container>
        <h3>GENERAL INFORMATION</h3>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="margin-brandname">
          <TextField
            fullWidth
            size="small"
            label="Brand Name"
            margin="normal"
            variant="outlined"
            color="secondary"
            id="brandName"
            aria-label="Brand Name"
            onChange={(e) =>
              setUserData({ ...userData, brandName: e.target.value })
            }
            value={userData["brandName"] || ""}
            error={Boolean(errors.brandName)}
            helperText={errors.brandName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="brandType">Brand Type</InputLabel>
          <Select
            fullWidth
            size="small"
            label="Brand Type"
            variant="outlined"
            color="secondary"
            id="brandType"
            aria-label="Brand Type"
            onChange={(e) =>
              setUserData({ ...userData, brandType: e.target.value })
            }
            value={userData["brandType"] || ""}
            error={Boolean(errors.brandType)}
          >
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
          </Select>
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
            onChange={(e) =>
              setUserData({ ...userData, streetAddress: e.target.value })
            }
            value={userData["streetAddress"] || ""}
            error={Boolean(errors.streetAddress)}
            helperText={errors.streetAddress}
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
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
            value={userData["city"] || ""}
            error={Boolean(errors.city)}
            helperText={errors.city}
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
            onChange={(e) =>
              setUserData({ ...userData, zipCode: e.target.value })
            }
            value={userData["zipCode"] || ""}
            error={Boolean(errors.zipCode)}
            helperText={errors.zipCode}
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
            onChange={(e) =>
              setUserData({ ...userData, taxIdNumber: e.target.value })
            }
            value={userData["taxIdNumber"] || ""}
            error={Boolean(errors.taxIdNumber)}
            helperText={errors.taxIdNumber}
          />
        </Grid>
        <Grid item xs={12} className="text-right">
          <Button
            className="btn-back"
            onClick={() => setStep(1)}
            variant="contained"
            color="secondary"
          >
            Back
          </Button>
          <Button onClick={handleNext} variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SecondStep;
