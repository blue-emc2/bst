import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import SectionOnlyViewList from './SectionOnlyViewList';

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

function Section({ body }) {
  return (
    <Card>
      <CardContent>
        <Typography>
          { body }
        </Typography>
      </CardContent>
    </Card>
  )
}

Section.propTypes = {
  body: PropTypes.any.isRequired
}

class Column extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { sections } = this.props.article

    // TODO: xsはとりあえずauto layoutにしておく
    return (
      <React.Fragment>
        {sections.map((e) =>
          <Grid item xs key={e.id}>
            <Section body={e.body} />
          </Grid>
        )}
      </React.Fragment>
    )
  }
}

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.col = 12 / props.article.col;
  }

  render () {
    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              <SectionOnlyViewList
                rowCount={this.props.article.col}
                {...this.props} />
            </Grid>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

Article.propTypes = {
  article: PropTypes.any.isRequired,
  sections: PropTypes.arrayOf(PropTypes.array)
};

export default withStyles(styles)(Article)
