import React from 'react';

import Section from './Section';

class SectionList extends React.Component {
  constructor(props) {
    super(props);

    const list = [...Array(props.rowCount)].map((_, index) => index);
    this.state = { sections: list };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.rowCount != this.props.rowCount) {
      const list = [...Array(this.props.rowCount)].map((_, index) => index);
      this.state = { sections: list };
    }
  }

  addSection() {
    const id = this.state.sections.length;
    this.setState({
      sections: this.state.sections.concat(id)
    })
  }

  deleteSection(target_id) {
    const newSections = this.state.sections.filter(cell => cell !== target_id);
    // TODO: あとでバリデーションを入れる

    this.setState({
      sections: newSections
    })
  }

  render () {
    // console.log(this.state.sections);

    return (
      // sectionsを元にcellを生成する
      this.state.sections.map((id) =>
        <Section
          key={id}
          data-key={id}
          deleteSection={this.deleteSection.bind(this)}
          {...this.props} />
      )
    )
  }
}

export default SectionList;
