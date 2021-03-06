import React from "react";
import ReactDOM from "react-dom";
import IconButton from '@material-ui/core/IconButton';
export default function ImageUploader() {
  return (
    <div className="App" style={{marginTop:"2vh"}}>
  
     

      <div className="mw400 center" style={{ textAlign: "left" }}>
   <h6>Upload the Product Image</h6>   
      <UploadPreview />
 
        
      </div>
    </div>
  );
}

class UploadPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.onChange} />
        {this.state.file && (
          <div style={{ textAlign: "center" }}>
            <button variant="contained" color="primary" onClick={this.resetFile}>Remove File</button>
          </div>
        )}
        <img style={{ width: "50%" }} src={this.state.file} />
      </div>
    );
  }
}


