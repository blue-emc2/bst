import React from 'react';
import Dropzone from 'react-dropzone';

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
        <Dropzone name={this.props.name} onDrop={this.onDrop} onFileDialogCancel={this.onCancel} accept="image/*">
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

export default ImageDropZone
