import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  }
})

class ArticleBox extends React.Component {
  constructor(props) {
    super(props)
    console.info(props.articles)
  }

  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              {this.props.articles.map(article => (
                <Grid item key={article.id} sm={6} md={4} lg={3}>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

ArticleBox.propTypes = {
  articles: PropTypes.array.isRequired,
  sections: PropTypes.arrayOf(PropTypes.array)
};

export default withStyles(styles)(ArticleBox)
