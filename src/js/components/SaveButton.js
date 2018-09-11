import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import BoardLib from "../board.js";


class SaveButton extends Component {

  constructor(props) {
    super(props);
    this.buttonPushed = this.buttonPushed.bind(this);
  }

  render() {
    return <IconButton color="primary" aria-label="Save Game" onClick={this.buttonPushed}>
      <Icon>save</Icon>
    </IconButton>;
  }

  buttonPushed() {
    var fileDownload = require('js-file-download');
    let data = BoardLib.exportToJson(this.props.table);
    fileDownload(data, 'game.json');
  }

}

export default SaveButton;
