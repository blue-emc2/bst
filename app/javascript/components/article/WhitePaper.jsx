import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import SectionList from './SectionList';
import Footer from '../Footer';
import WhitePaperFooter from '../WhitePaperFooter';
import FormControl from '@material-ui/core/FormControl';

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
  formControl: {
    margin: theme.spacing.unit * 3,
  },
})

class WhitePaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rowCount: "1" };
    this.sectionRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.onAddSectionEvent = this.onAddSectionEvent.bind(this);
  }

  onClick() {
    this.sectionRef.addSection();
  }

  handleChange(event) {
    this.setState({rowCount: event.target.value});
  }

  onAddSectionEvent() {
    this.sectionRef.addSection();
  }

  render () {
    const { classes, articles_path } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <label>
            何列にしますか？
            <select name="article[col]" value={this.state.rowCount} onChange={this.handleChange}>
              <option value={"1"}>1列</option>
              <option value={"2"}>2列</option>
              <option value={"3"}>3列</option>
            </select>
          </label>
          <form>
            <FormControl component="fieldset" className={classes.formControl}>
              <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container spacing={40} >
                  <SectionList
                    rowCount={this.state.rowCount}
                    ref={(ref) => { this.sectionRef = ref; }}
                    {...this.props} />
                </Grid>
              </div>
              {/* 名前が微妙すぎる... */}
              <Footer render={() =>
                <WhitePaperFooter addSectionEvent={this.onAddSectionEvent} articles_path={articles_path} />
              } />
            </FormControl>
          </form>
        </main>
      </React.Fragment>
    )
  }
}

WhitePaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhitePaper)
