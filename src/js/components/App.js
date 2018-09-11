import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import '../../App.css';

// For top App Bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import LoadButton from "../containers/LoadButton.js";
// import LoadButton from "./LoadButton.js";
import SaveButton from "../containers/SaveButton.js";
import ComponentExplorer from '../containers/ComponentExplorer.js';
import PropertiesEditor from '../containers/PropertiesEditor.js';
import Viewer from "../containers/Viewer.js";

import SplitterLayout from 'react-splitter-layout';

const styles = theme => ({
  flex: {
    flexGrow: 1,
    display: "flex",
  },
  appBar: {
    flexDirection: "row",
  },
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    height: "100%",
  },
  mainSplitter: {
    position: "static",
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.onResize = this.onResize.bind(this);
    // this.viewer = React.createRef();
  }

  onResize(size) {
    this.viewer.setState( {width: size} );
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className="pane-content">
          <AppBar position="static" color="default" className={classes.appBar}>
            <Toolbar variant="dense">
              <Typography variant="title" color="inherit" className={classes.flex}>
                BoardGameFramework - Untitled
              </Typography>
            </Toolbar>
            <SaveButton />
            <LoadButton />
          </AppBar>
        </div>

        <SplitterLayout
          primaryIndex={1}
          secondaryInitialSize={350}
          secondaryMinSize={100}
          primaryMinSize={100}
          customClassName={classes.mainSplitter}
          onSecondaryPaneSizeChange={this.onResize}>
          <SplitterLayout vertical percentage primaryMinSize={25} secondaryMinSize={25}>
              <ComponentExplorer />
              <PropertiesEditor />
          </SplitterLayout>
          <Viewer ref={(ref) => this.viewer=ref} />
        </SplitterLayout>
    </div>
    );
  }
}


export default withStyles(styles)(App);
