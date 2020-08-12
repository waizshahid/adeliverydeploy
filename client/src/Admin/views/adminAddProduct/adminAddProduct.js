import React, {useState} from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const AdminAddProduct = () => {

  const [state, setState] = useState({
    title: "",
    category: "",
    subCategory: "",
    price: "",
imageID: "",
description: ""
  });

  const inputChangeHandler = (e) => {
    const {name, value} = e.target;

    setState((prevState) => {
      return{ 
        ...prevState,
        [name]: value
      }
    })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("/addproduct", state).then((res) =>{}).catch(err => console.log(err))
  }

console.log(state);
  return ( <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
    <Grid container direction="column" justify="center" alignItems="center" spacing="3" style={{padding: "2rem 1rem"}}>
        <Grid item>
        <TextField
          label="Title"
          name="title"
          value={state.title}
          variant="outlined"
          onChange={inputChangeHandler}
        />
        </Grid>
        <Grid item>
        <TextField
          label="Category"
          name="category"
          value={state.category}
          variant="outlined"
          onChange={inputChangeHandler}
        />
        </Grid>
        <Grid item>
        <TextField
          label="Title"
          name="subCategory"
          value={state.subCategory}
          variant="outlined"
          onChange={inputChangeHandler}
        />
        </Grid>
        <Grid item>
        <TextField
          label="Price"
          name="price"
          value={state.price}
          variant="outlined"
          onChange={inputChangeHandler}
        />
        </Grid>
        <Grid item>
        <TextField
          label="Image ID"
          name="imageID"
          value={state.imageID}
          variant="outlined"
          onChange={inputChangeHandler}
        />
        </Grid>
        <Grid item>
        <TextField
          label="Description"
          name="description"
          value={state.description}
          variant="outlined"
          onChange={inputChangeHandler}
        />
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
    </Grid>
    </form>);
}

export default AdminAddProduct