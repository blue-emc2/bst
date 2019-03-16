import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

const styles = theme => ({
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

class WhitePaperFooter extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.addSectionEvent();
  }

  render () {
    const { classes } = this.props;

    return (
      <div>
        <Fab color="secondary" aria-label="Add" className={classes.fabButton} onClick={this.onClick}>
          <AddIcon />
        </Fab>
      </div>
    )
  }
}

WhitePaperFooter.propTypes = {
  addSectionEvent: PropTypes.func.isRequired
}

export default withStyles(styles)(WhitePaperFooter);
