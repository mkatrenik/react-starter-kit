import React from 'react';
import autoprefix from './autoprefix';
// TODO autoprefix styles
// TODO check propTypes

function makeStyleComponentClass(defaults, displayName = 'Style', tagName = 'div') {
  const Style = React.createClass({
    displayName: displayName,

    propTypes: {
      children: React.PropTypes.node,
      className: React.PropTypes.string,
      style: React.PropTypes.object
    },

    statics: {
      style: defaults
    },

    getDefaultProps() {
      return defaults;
    },

    render() {
      const children = this.props.children;
      const className =  this.props.className;
      const style = Object.assign({}, this.props, {
        children: null,
        component: null,
        style: null
      });
      Object.assign(style, this.props.style);
      delete style.className;

      return React.createElement(
        tagName,
        Object.assign(
          {},
          // this.props.props || {},
          { style: autoprefix(style), children, className }
        )
      );
    }
  });

  return Style;
}


const CSSDisplayNames = {
  Block: 'block',
  Flex: 'flex',
  InlineBlock: 'inline-block',
  Table: 'table',
  TableRow: 'table-row',
  TableCell: 'table-cell',
  Inline: 'inline',
};

const Display = {};

for (const name in CSSDisplayNames) {
  if (CSSDisplayNames.hasOwnProperty(name)) {
    const display = CSSDisplayNames[name];
    Display[name] = makeStyleComponentClass({display: display}, name);
  }
}

export default Display;
