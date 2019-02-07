import React from 'react';

import SectionOnlyView from './SectionOnlyView';

// TODO: 別componentにしなくても良いかもしれないが、いきなり共通化するとわけが分からなくなる恐れがあるので、別にした。
class SectionOnlyViewList extends React.Component {
  constructor(props) {
    super(props);

    const list = [...Array(props.rowCount)].map((_, index) => index);
    this.state = { sections: list };
  }

  render () {
    return (
      // sectionsを元にcellを生成する
      this.state.sections.map((id) =>
        <SectionOnlyView
          key={id}
          data-key={id}
          deleteSection={this.deleteSection}
          {...this.props} />
      )
    )
  }
}

export default SectionOnlyViewList;
