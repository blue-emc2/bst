import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1,
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
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
})

class Section extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { classes } = this.props

    return (
      <Paper className={classes.paper}>item1</Paper>
    )
  }
}

class Column extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { classes } = this.props
    const { sections } = this.props.article

    // TODO: xsはとりあえずauto layoutにしておく
    return (
      <React.Fragment>
        {sections.map((e, index) =>
          <Grid item xs key={index}>
            <Section classes={classes} />
          </Grid>
        )}
      </React.Fragment>
    )
  }
}

class ArticleBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classes.root}>
            <Grid container spacing={8}>
              <Grid container item xs={6} spacing={24} direction="column">
                <Column classes={classes} article={this.props.article} />
              </Grid>
              <Grid container item xs={6} spacing={24} direction="column">
                <Column classes={classes} article={this.props.article} />
              </Grid>
            </Grid>
          </div>
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
