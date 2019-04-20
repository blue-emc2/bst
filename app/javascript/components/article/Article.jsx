import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Img from '../atoms/Img';
import Text from '../atoms/Text';
import Footer from '../Footer';

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
    height: 282,  // TODO: あとで可変にする
    width: 400    // TODO: あとで可変にする
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
})

function SectionView(props) {
  const { section } = props;
  const { classes } = props;
  let c = null;

  // なんかもうちょっとかっこよくしたい
  if (section.body !== null) {
    c = <CardContent>
          <Text body={section.body} />
        </CardContent>;
  } else if (section.photo !== null) {
    c = <Img image={section.photo} className={classes.cardMedia} />;
  }

  return (
    <Grid item xs={6} container alignItems="center" justify="center">
      <Card className={classes.card}>
        {c}
      </Card>
    </Grid>
  )
}

function SectionViewList(props) {
  return (
    props.article.sections.map((e, index) =>
      <SectionView section={e} key={index} {...props} />
    )
  )
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
              <SectionViewList {...this.props} />
            </Grid>
          </div>
        </main>
        <Footer render={() =>
          <div></div>
        } />
      </React.Fragment>
    )
  }
}

Article.propTypes = {
  article: PropTypes.any.isRequired,
  sections: PropTypes.arrayOf(PropTypes.array)
};

export default withStyles(styles)(Article)
