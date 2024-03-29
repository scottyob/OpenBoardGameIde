import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { LeadPencil } from 'mdi-material-ui'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { OpenBoardGame } from '../BoardGame.js';
import { didUpdateSelected } from '../actions/index.js';

import Input from '@material-ui/core/Input';


const styles = theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      margin: "20px",
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    notFound: {
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      display: 'flex',
      flexDirection: "column",
      textAlign: 'center',
    },
    notFoundSvgContainer: {
      fontSize: "62px",
    }
  };
};

class PropertiesEditor extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Callback that updates the selected items properties and dispatches a new
    // selected object.

    let itemToUpdate = this.props.selected;
    let key = event.target.id;
    if(key.startsWith("position.")) {
      key = key.split(".")[1]
      itemToUpdate["position"][key] = event.target.value;
    } else {
      itemToUpdate[key] = event.target.value;
    }

    this.props.dispatch(didUpdateSelected(itemToUpdate));
  }


  render() {
    const { classes } = this.props;

    if (this.props.selected === null) {
      return <div className={classes.notFound}>
        <div className={classes.notFoundSvgContainer}>
          <LeadPencil fontSize="inherit" color="disabled" />
        </div>
        <Typography color="textSecondary">No Component Selected</Typography>
      </div>;
    }

    var form = <div>Unknown Object Type</div>;

    if ((this.props.selected instanceof OpenBoardGame.GameComponent ||
      this.props.selected instanceof OpenBoardGame.GameComponentStack)  &&
      this.props.selected.position === null) {
        this.props.selected.position = new OpenBoardGame.Position();
    }


    if(this.props.selected instanceof OpenBoardGame.GameComponent) {
      form = <form onChange={this.handleChange} className={classes.form}>
        <TextField id="displayName" label="Display Name" value={this.props.selected.displayName} />
        <TextField id="position.x" label="x position" type="number" value={this.props.selected.position.x} />
        <TextField id="position.y" label="y position" type="number" value={this.props.selected.position.y} />
        <TextField id="rotation" label="Rotation" type="number" value={this.props.selected.position.rotation} />
        <TextField id="width" label="Width" type="number" value={this.props.selected.width} />
        <TextField id="height" label="Height" type="number" value={this.props.selected.height} />
        <TextField id="frontUrl" label="Front URL" value={this.props.selected.frontUrl} />
        <TextField id="backUrl" label="Back URL" value={this.props.selected.backUrl} />
        <TextField id="stackableIdentifier" label="Stackable Identifier" value={this.props.selected.stackableIdentifier} />
      </form>;
    } else if (this.props.selected instanceof OpenBoardGame.GameComponentStack) {
      form = <form onChange={this.handleChange} className={classes.form}>
        <TextField id="position.x" label="x position" type="number" value={this.props.selected.position.x} />
        <TextField id="position.y" label="y position" type="number" value={this.props.selected.position.y} />
        <TextField id="rotation" label="Rotation" type="number" value={this.props.selected.position.rotation} />
      </form>;
    } else if (this.props.selected instanceof OpenBoardGame.Player) {
      form = <form onChange={this.handleChange} className={classes.form}>
        <TextField id="xPos" label="x position" type="number" value={this.props.selected.xPos} />
        <TextField id="yPos" label="y position" type="number" value={this.props.selected.yPos} />
        <TextField id="rotation" label="Rotation" type="number" value={this.props.selected.rotation} />
      </form>
    } else if (this.props.selected instanceof OpenBoardGame.Table ) {
      form = <form onChange={this.handleChange} className={classes.form}>
        <TextField id="width" label="Width" type="number" value={this.props.selected.width} />
        <TextField id="height" label="Height" type="number" value={this.props.selected.height} />
      </form>
    } else {
      console.log("Properties of Unknown Type");
    }

    return <div className={classes.root}>
      {form}
    </div>;
  }
}

export default withStyles(styles)(PropertiesEditor)
