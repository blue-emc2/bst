import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Cell from './Cell'

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
  fab: {
    margin: theme.spacing.unit,
    position: 'fixed',
    right: 0,
    bottom: 0
  },
})

class CellList extends React.Component {
  constructor(props) {
    super(props);

    const list = [...Array(props.cells)].map((_, index) => index);
    this.state = {
      cell_list: list
    };
  }

  addCell() {
    const id = this.state.cell_list.length
    this.setState({
      cell_list: this.state.cell_list.concat(id)
    })
  }

  deleteCell(target_id) {
    const new_cells = this.state.cell_list.filter(cell => cell !== target_id);
    // TODO: あとでバリデーションを入れる

    this.setState({
      cell_list: new_cells
    })
  }

  render () {
    return (
      // cell_listを元にcellを生成する
      this.state.cell_list.map((id) =>
        <Cell key={id} data-key={id} deleteCell={this.deleteCell.bind(this)} {...this.props} />
      )
    )
  }
}

class WhitePaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cells: 1, value: "1" };
    this.cell = React.createRef();
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClick() {
    this.cell.current.addCell();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <label>
            何列にしますか？
            <select name="article[col]" value={this.state.value} onChange={this.handleChange}>
              <option value={1}>1列</option>
              <option value={2}>2列</option>
              <option value={3}>3列</option>
            </select>
          </label>
          <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.onClick}>
            <AddIcon />
          </Fab>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40} >
              <CellList cells={this.state.cells} ref={this.cell} {...this.props} />
            </Grid>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

WhitePaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhitePaper)
