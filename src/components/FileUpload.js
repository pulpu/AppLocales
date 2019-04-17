import React, {Component} from 'react';
import {storage} from '../Firebase';


class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      this.setState(() => ({file}));
    }
  }
  handleUpload = () => {
      const {file} = this.state;
      const uploadTask = storage.ref(`files/${file.name}`).put(file);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('files').child(file.name).getDownloadURL().then(url => {
            console.log(url);
            this.props.urlFilePath(url);
            this.setState({url});
        })
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <input className="btn btn-primary" type="file" onChange={this.handleChange}/>
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={this.handleUpload}>Upload</button>
          </div>
        </div>
        <div className="row mt-2">
          <progress className="col-12" value={this.state.progress} max="100"/>
        </div>
      </div>
    )
  }
}


export default FileUpload;
