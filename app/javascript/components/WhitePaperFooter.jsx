import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  button: {
    margin: theme.spacing.unit,
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
      <React.Fragment>
        <Button variant="contained" className={classes.button}>
          TOP画面へ
        </Button>
        <Fab color="secondary" aria-label="Add" className={classes.fabButton} onClick={this.onClick}>
          <AddIcon />
        </Fab>
        <Button variant="contained" color="primary" className={classes.button}>
          ストーリーを確認する
        </Button>
      </React.Fragment>
    )
  }
}

WhitePaperFooter.propTypes = {
  addSectionEvent: PropTypes.func.isRequired
}

export default withStyles(styles)(WhitePaperFooter);
