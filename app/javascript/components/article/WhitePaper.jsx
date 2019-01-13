import React from 'react';
import PropTypes from 'prop-types'
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
import Dropzone from 'react-dropzone'
import Button from '@material-ui/core/Button';

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
  }

  handleChange = (event, value) => {
    this.setState({ value });
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
          <TabContainer type={value} />
        </Card>
      </Grid>
    )
  }
}

class CellList extends React.Component {
  constructor(props) {
    super(props);

    const list = [...Array(props.cells)].map(() => "input");
    this.state = {
      cell_list: list
    };
  }

  addCell() {
    this.setState({
      cell_list: this.state.cell_list.concat("input")
    })
  }

  render () {
    // cell_listを元にcellを復元する
    const { cell_list } = this.state;

    const inputCells = cell_list.map((value, index) =>
      <Cell key={index} role={value} {...this.props} />
    )

    let last_id = inputCells.length;
    inputCells.push(<Cell key={last_id} role={"appending"} {...this.props} />);
    return inputCells;
  }
}

class WhitePaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cells: 1 };
    this.cell = React.createRef();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.cell.current.addCell();
  }

  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <Button variant="contained" onClick={this.onClick}>
            Default
          </Button>
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

export default withStyles(styles)(WhitePaper)
