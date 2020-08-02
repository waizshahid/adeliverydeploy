import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles,ThemeProvider } from '@material-ui/styles';
import { Button,Grid,TextField,Modal,Fade,Backdrop,FormControl,InputLabel,Select,FormHelperText } from '@material-ui/core';
import ImageUploader from "./../../ImageUploader";
import SearchInput, {createFilter} from 'react-search-input'

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginLeft:"70vh",
    marginRight:"70vh"
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ProductsToolbar = props => {
  const { className, ...rest } = props;
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    Category: '',
    SubCategory:"",
    name: 'hai',
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
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />

        <Button
          color="primary"
          variant="contained"
          onClick={handleOpen}
        >
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

        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          className={classes.margin}
          label="Price"
    
        />
        </Grid>
        <Grid item xs={6}>
        <FormControl >
        <InputLabel htmlFor="age-native-simple">Category</InputLabel>
        <Select
          native
          autoWidth={true}
          labelWidth
          value={state.age}
          fullWidth={true}
          onChange={handleChange}
          inputProps={{
            name: 'Category',
         
          }}
        >

          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <FormHelperText style={{color:"white"}}>Some important helper textxxxx</FormHelperText>
      </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl >
        <InputLabel htmlFor="age-native-simple">SubCategory</InputLabel>
        <Select
          native
          autoWidth={true}
          labelWidth
          value={state.age}
          fullWidth={true}
          onChange={handleChange}
          inputProps={{
            name: 'SubCategory',
         
          }}
        >

          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <FormHelperText style={{color:"white"}}>Some important helper textxxxx</FormHelperText>
      </FormControl>
        </Grid>
        <Grid item xs={12} align="center"  style={{marginTop:"-4vh"}}>
        <TextField
          
          label="Description"
         fullWidth={true}
        />
        </Grid>
        <Grid item xs={6} >
       <ImageUploader/>
        </Grid>
        <Grid item xs={12} align="right">
        <Button variant="contained" color="primary">
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
  className: PropTypes.string
};

export default ProductsToolbar;
