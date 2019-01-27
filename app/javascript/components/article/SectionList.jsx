import React from 'react';

import Section from './Section';

class SectionList extends React.Component {
  constructor(props) {
    super(props);

    const list = [...Array(props.cells)].map((_, index) => index);
    this.state = { sections: list };
  }

  addCell() {
    const id = this.state.sections.length
    this.setState({
      sections: this.state.sections.concat(id)
    })
  }

  deleteCell(target_id) {
    const new_cells = this.state.sections.filter(cell => cell !== target_id);
    // TODO: あとでバリデーションを入れる

    this.setState({
      sections: new_cells
    })
  }

  render () {
    return (
      // sectionsを元にcellを生成する
      this.state.sections.map((id) =>
        <Section key={id} data-key={id} deleteCell={this.deleteCell.bind(this)} {...this.props} />
      )
    )
  }
}

export default SectionList;
