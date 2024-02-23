import { useContext, useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { multiStepContext } from "../StepContext";

const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};

    if (!userData.firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!userData.lastName) {
      newErrors.lastName = "Last Name is required";
    }

    if (!userData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!userData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(userData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    }

    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!userData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const isValid = validateStep1();

    if (isValid) {
      setStep(2);
    }
  };

  return (
    <form>
      <Grid container>
        <div className="heading">
          <h1>Your Profile</h1>
          <p>
            Enter the login information for your account. You will be able to
            create additional users after registering
          </p>
        </div>
      </Grid>
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
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
            value={userData["firstName"] || ""}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
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
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
            value={userData["lastName"] || ""}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
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
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            value={userData["email"] || ""}
            error={Boolean(errors.email)}
            helperText={errors.email}
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
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
            value={userData["phoneNumber"] || ""}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber}
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
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            value={userData["password"] || ""}
            error={Boolean(errors.password)}
            helperText={errors.password}
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
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
            value={userData["confirmPassword"] || ""}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
          />
        </Grid>
        <Grid item xs={12} className="text-right">
          <Button onClick={handleNext} variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FirstStep;
