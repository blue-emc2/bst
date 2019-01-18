import React from 'react';
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dropzone from 'react-dropzone'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
  },
})

class ImageDropZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };

    this.onDrop = this.onDrop.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onDrop(images) {
    this.setState({images});
  }

  onCancel() {
    this.setState({
      images: []
    });
  }

  render() {
    const images = this.state.images.map(image => (
      <li key={image.name}>
        {image.name} - {image.size} bytes
      </li>
    ))

    return (
      <div>
        <h1>React S3 Image Uploader Sample</h1>
        <Dropzone onDrop={this.onDrop} onFileDialogCancel={this.onCancel} accept="image/*">
           {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
                <p>Drop files here, or click to select files</p>
            </div>
          )}
        </Dropzone>
        <aside>
          <h4>Files</h4>
          <ul>{images}</ul>
        </aside>
      </div>
    );
  }
}

class TabContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTextOrImage(type) {
    if (type === 'text') {
      return <TextField
        id="standard-name"
        multiline
        rowsMax="10"
        margin="normal"
      />
    } else {
      return <ImageDropZone />
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderTextOrImage(this.props.type)}
      </React.Fragment>
    )
  }
}

TabContainer.propTypes = {
  type: PropTypes.string.isRequired,
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'text' };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  };

  onClick(id) {
    this.props.deleteCell(id);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Grid item xs={6} container alignItems="center" justify="center">
        <Tabs value={value} onChange={this.handleChange}>
          <Tab value='text' label="文章に入力する" />
          <Tab value='image' label="画像をアップロードする" />
        </Tabs>
        <Card className={classes.card}>
          <CardContent>
            <TabContainer type={value} />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => this.onClick(this.props['data-key'])}>削除</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

Cell.propTypes = {
  deleteCell: PropTypes.func.isRequired,
}

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
