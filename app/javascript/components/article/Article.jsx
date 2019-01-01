import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
})

class ArticleBox extends React.Component {
  constructor(props) {
    super(props)
    console.info(props)
  }

  render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
        </main>
      </React.Fragment>
    )
  }
}

ArticleBox.propTypes = {
  article: PropTypes.any.isRequired,
  sections: PropTypes.arrayOf(PropTypes.array)
};

export default withStyles(styles)(ArticleBox)
