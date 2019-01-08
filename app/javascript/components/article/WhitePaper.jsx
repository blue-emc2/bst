import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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
})

function TabContainer(props) {
  const { value } = props;

  return (
    <TextField
      id="standard-name"
      multiline
      rowsMax="10"
      margin="normal"
    />
  );
}

class WhitePaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40} >
              <Grid item xs={6} container alignItems="center" justify="center">
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab label="文章に入力する" />
                  <Tab label="画像をアップロードする" />
                </Tabs>
                <Card className={classes.card}>
                  {value === 0 && <TabContainer>value</TabContainer>}
                  {value === 1 && <TabContainer>value</TabContainer>}
                </Card>
              </Grid>
              <Grid item xs={6} container alignItems="center" justify="center">
                <Card className={classes.card}>
                </Card>
              </Grid>
            </Grid>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(WhitePaper)
