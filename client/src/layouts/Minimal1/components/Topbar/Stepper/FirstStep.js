import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios'

import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "grey",
      borderWidth: "10vh"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "grey",
      borderWidth: ".5vh"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderWidth: ".5vh"
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderWidth: ".5vh"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderWidth: ".5vh"
      }
    }
  }
})(TextField);

const FirstStep = ({
  handleNext,
  handleChange,
  codeReq,
  values: { firstName, lastName, email, password, phoneNumber, codeRequest},
  filedError,
  isError
}) => {
  // Check if all values are not empty
  const isEmpty =
    firstName.length > 0 && lastName.length > 0 && email.length > 0;

  const test = () =>{
    const firstStepValues = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    }
    axios.post('/signup', firstStepValues)
        .then(res => {
          codeReq(res.data.id)
          if (res.data.message === 'success'){
            handleNext()
          }
        })
        .catch(err => console.log(err))
  }

  return (
    <Fragment>
      <Grid container spacing={2} noValidate style={{ marginTop: "3vh" }}>
        <Grid item xs={6} sm={6}>
          <CssTextField
            label="First Name"
            variant="outlined"
            fullWidth={true}
            InputLabelProps={{
              style: {
                color: "white",
                fontWeight: "bold"
              }
            }}
            defaultValue={firstName}
            onChange={handleChange("firstName")}
            margin="normal"
            error={filedError.firstName !== ""}
            helperText={
              filedError.firstName !== "" ? `${filedError.firstName}` : ""
            }
            required
          />
        </Grid>
        <Grid item xs={6} sm={6} >
          <CssTextField
            label="Last Name"
            variant="outlined"
            fullWidth={true}
            InputLabelProps={{
              style: {
                color: "white",
                fontWeight: "bold"
              }
            }}
            defaultValue={lastName}
            onChange={handleChange("lastName")}
            margin="normal"
            error={filedError.lastName !== ""}
            helperText={
              filedError.lastName !== "" ? `${filedError.lastName}` : ""
            }
            required
          />
        </Grid>

        <Grid item xs={12} sm={12} style={{ marginTop: "-3vh" }}>
          <CssTextField
            label="Email Address"
            variant="outlined"
            fullWidth={true}
            InputLabelProps={{
              style: {
                color: "white",
                fontWeight: "bold"
              }
            }}
            type="email"
            defaultValue={email}
            onChange={handleChange("email")}
            margin="normal"
            error={filedError.email !== ""}
            helperText={filedError.email !== "" ? `${filedError.email}` : ""}
            required
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <CssTextField
            variant="outlined"
            label="Password"
            fullWidth={true}
            InputLabelProps={{
              style: {
                color: "white",
                fontWeight: "bold"
              }
            }}
            type="password"
            defaulValue={password}
            value={password}
            onChange={handleChange("password")}
            margin="margin"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            variant="outlined"
            label="Phone Number"
            fullWidth={true}
            InputLabelProps={{
              style: {
                color: "white",
                fontWeight: "bold"
              }
            }}
            type="phoneNumber"
            defaulValue={phoneNumber}
            value={phoneNumber}
            onChange={handleChange("phoneNumber")}
            margin="margin"
            required
          />
        </Grid>
        <Grid item xs={12} aliign="center">
          <Button
            variant="contained"
            fullWidth
            disabled={!isEmpty || isError}
            style={{
              backgroundColor: "white",
              fontWeight: "bold:",
              marginTop: "3vh",
              borderRadius: "5vh"
            }}
            onClick={()=> {
              test()
            }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3vh" }} align="center">
        <span style={{ fontSize: "12px", color: "white", }}>
          By signing up, I agree to greenrush’s Terms & Conditions
        </span>
      </Grid>
    </Fragment>
  );
};

export default FirstStep;