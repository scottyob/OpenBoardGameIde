import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import BoardLib from "../board.js";
import Files from 'react-files'
import { didLoadTable } from '../actions/index.js';


class LoadButton extends Component {

  constructor(props) {
    super(props);
    this.onFilesChange = this.onFilesChange.bind(this);
  }

  render() {
    return <Files
          className='files-dropzone'
          accepts={['application/json']}
          multiple={false}
          maxFileSize={10000000}
          minFileSize={0}
          onChange={this.onFilesChange}
          clickable
        >
          <IconButton color="primary" aria-label="Load Game File">
            <Icon>folder</Icon>
          </IconButton>
        </Files>
  }

  onFilesChange(files) {
    var reader = new FileReader();
    reader.onload = function(evt) {
      if(evt.target.readyState != 2) return;
      if(evt.target.error) {
        alert('Error while reading file');
        return;
      }
      let fileContent = evt.target.result;
      this.props.dispatch(didLoadTable(fileContent));
    }.bind(this);
    reader.readAsText(files[0]);
  }
}

export default LoadButton;

//onChange={this.onFilesChange}
//onError={this.onFilesError}
