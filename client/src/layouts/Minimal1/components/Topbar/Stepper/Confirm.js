import React from "react";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import blue from "@material-ui/core/colors/blue";
import ImageUploader from "react-images-upload";
import Button from "@material-ui/core/Button";
import { storage } from "../../../../../firebase";
import "./styles.css";
import {values} from "underscore";
import axios from 'axios'
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  },
  cardHeader: {
    backgroundColor: "white"
  },
  input: {
    display: "none"
  },
  title: {
    color: blue[800],
    fontWeight: "bold",
    fontFamily: "Montserrat"
  },
  button: {
    color: blue[900],
    margin: 10
  },
  secondaryButton: {
    color: "gray",
    margin: 10
  },
  typography: {
    margin: theme.spacing.unit * 2,
    backgroundColor: "default"
  },

  searchRoot: {
    padding: "2px 4px",
    width: 400
  },
  searchInput: {
    marginLeft: 8
  },
  searchIconButton: {
    padding: 10
  },
  searchDivider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      image: null,
      values: {}
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  componentDidMount = () => {
    this.setState({values: this.props.allValues})
  }

  handleSubmit = ()  => {
    console.log(this.state)
    const uploadTask = storage.ref(`images/${this.state.pictures[0].name}`).put(this.state.pictures[0])
    uploadTask.on(
        "state_changed",
        snapshot => {

        },
        error => {
          console.log(error)
        },
        () => {
          storage
              .ref('images')
              .child(this.state.pictures[0].name)
              .getDownloadURL()
              .then(url => {
                console.log(url)
                let tempValue = this.state.values
                tempValue.imageID = url
                console.log(this.state.values)
                axios.post('/confirm', tempValue)
                    .then(res =>  console.log('sign up successful'))
                    .catch(err => console.log(err))
              })
        }
    )
  }


  render() {
    return (
      <div className="App">
  
          <Grid container xs={12} spacing={2}>
            <Grid item xs={12}>
            <ImageUploader
          
            style={{border:'2px solid white',borderStyle: "dashed",marginTop:'2vh'}}   
            withIcon={false}
            withPreview={true}
            label=""
            buttonText="Upload Images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
            maxFileSize={1048576}
            fileSizeError=" file size is too big"
          />
    
  
</Grid>
<Grid item xs={12} align="right">
<Button variant="contained" style={{backgroundColor:"white",color:"blue",borderRadius:"4vh"}} onClick={this.handleSubmit} n>
  Submit
</Button>
</Grid>
</Grid>
      </div>
    );
  }
}

export default Confirm;