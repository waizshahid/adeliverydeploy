import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import {
  Button,
  Grid,
  TextField,
  Modal,
  Fade,
  Backdrop,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@material-ui/core";
import ImageUploader from "./../../ImageUploader";
import SearchInput, { createFilter } from "react-search-input";
import axios from 'axios'
import {storage} from "../../../../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {},
  row: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginLeft: "70vh",
    marginRight: "70vh",
  },
  spacer: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
}));

const ProductsToolbar = (props) => {
  const { className, ...rest } = props;
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    Category: "",
    SubCategory: "",
    name: "hai",
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [addProductState, setAddProductState] = useState({
    title: "",
    price: "",
    category: "",
    subCategory: "",
    description: "",
    file: [],
  });
  const handleAddProductChange = (e) => {
    const { name, value } = e.target;

    setAddProductState((prevState) => {
      return { ...prevState, [name]: value };
    });

    console.log(addProductState);
  };
  const addProductSubmitHandler = (e) => {
    e.preventDefault();
    // Send Request to the backend
    console.log(addProductState)
    console.log(addProductState.file[0])
    const uploadTask = storage.ref(`productImages/${addProductState.file[0].name}`).put(addProductState.file[0])
    uploadTask.on(
        "state_changed",
        snapshot => {

        },
        error => {
          console.log(error)
        },
        () => {
          storage
              .ref('productImages')
              .child(addProductState.file[0].name)
              .getDownloadURL()
              .then(url => {
                console.log(url)
                let tempValue = addProductState
                tempValue.imageID = url
                console.log(tempValue)
                axios.post('/addProduct', tempValue)
                    .then(res =>  console.log('product uploaded'))
                    .catch(err => console.log(err))
              })
        }
    )

  };
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <span className={classes.spacer} />

        <Button color="primary" variant="contained" onClick={handleOpen}>
          Add product
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search product"
        />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container xs={12} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  className={classes.margin}
                  label="Title"
                  name="title"
                  value={addProductState.title}
                  onChange={handleAddProductChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className={classes.margin}
                  label="Price"
                  name="price"
                  value={addProductState.price}
                  onChange={handleAddProductChange}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="age-native-simple">Category</InputLabel>
                  <Select
                    native
                    autoWidth={true}
                    labelWidth
                    value={state.age}
                    fullWidth={true}
                    // onChange={handleChange}
                    // inputProps={{
                    //   name: "Category",
                    // }}
                    name="category"
                    defaultValue={addProductState.category}
                    onChange={handleAddProductChange}
                  >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                  <FormHelperText style={{ color: "white" }}>
                    Some important helper textxxxx
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="age-native-simple">
                    SubCategory
                  </InputLabel>
                  <Select
                    native
                    autoWidth={true}
                    labelWidth
                    value={state.age}
                    fullWidth={true}
                    // onChange={handleChange}
                    // inputProps={{
                    //   name: "SubCategory",
                    // }}
                    name="subCategory"
                    value={addProductState.subCategory}
                    onChange={handleAddProductChange}
                  >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                  <FormHelperText style={{ color: "white" }}>
                    Some important helper textxxxx
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} align="center" style={{ marginTop: "-4vh" }}>
                <TextField
                  label="Description"
                  fullWidth={true}
                  name="description"
                  value={addProductState.description}
                  onChange={handleAddProductChange}
                />
              </Grid>
              <Grid item xs={6}>
                <ImageUploader handleUpload={handleAddProductChange} />
              </Grid>
              <Grid item xs={12} align="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addProductSubmitHandler}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string,
};

export default ProductsToolbar;
