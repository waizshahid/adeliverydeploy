import React, {Fragment, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios'

// Destructure props
const SecondStep = ({
                        handleNext,
                        handleBack,
                        codeReq,
                        handleChange,
                        values: {date, phone, fourdigitcode},
                        filedError,
                        isError
                    }) => {
    // Check if all values are not empty


    const verifyValues = {
        codeReq,
        fourdigitcode
    }

    const verifyCode = () => {
        axios.post('/verify', verifyValues)
            .then(res => {
                if(res.data === true){
                    handleNext()
                }
                else{
                    console.log('invalid code')
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{marginTop: "8vh"}} align="center">
          <span style={{color: "white", marginTop: "1vh"}}>
            Enter the four-digit code to verify your phone number.
          </span>
                </Grid>
            </Grid>
            <Grid i item xs={12}>
                <TextField
                    fullWidth
                    label="Four-Digit Code"
                    variant="outlined"
                    defaultValue={fourdigitcode}
                    onChange={handleChange("fourdigitcode")}
                    margin="normal"
                    error={filedError.fourdigitcode !== ""}
                    helperText={
                        filedError.fourdigitcode !== "" ? `${filedError.fourdigitcode}` : ""
                    }
                    required
                />
            </Grid>

            <div
                style={{display: "flex", marginTop: 50, justifyContent: "flex-end"}}
            >
                <Grid container>
                    <Grid container spacing={3} xs={12}>
                        <Grid item xs={6}>
                            <Button
                                color="default"
                                onClick={handleBack}
                                fullWidth
                                style={{
                                    marginRight: 20,
                                    borderRadius: "5vh",
                                    backgroundColor: "white"
                                }}
                            >
                                Skip
                            </Button>
                        </Grid>

                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                fullWidth
                                style={{groundColor: "white", borderRadius: "5vh"}}
                                onClick={verifyCode}
                            >
                                Continue
                            </Button>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <span style={{color: "white"}}>Resend Code</span>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
};

export default SecondStep;