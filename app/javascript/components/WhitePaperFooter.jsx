import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";

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
    const { classes, articles_path } = this.props;

    return (
      <React.Fragment>
        <Router forceRefresh={true}>
          <Button variant="contained" className={classes.button} component={Link} to={articles_path}>
            TOP画面へ
          </Button>
          <Fab color="secondary" aria-label="Add" className={classes.fabButton} onClick={this.onClick}>
            <AddIcon />
          </Fab>
          <Button variant="contained" color="primary" className={classes.button} type="submit">
            ストーリーを確認する
          </Button>
        </Router>
      </React.Fragment>
    )
  }
}

WhitePaperFooter.propTypes = {
  addSectionEvent: PropTypes.func.isRequired
}

export default withStyles(styles)(WhitePaperFooter);
