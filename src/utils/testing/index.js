import React from 'react';
// import {dump} from 'app/utils/debug';

const { TestUtils } = React.addons;

const Utils = {
  /**
   * renders component into 'virtual dom'
   * @param  {ReactElement} component - `<Some ... />`
   * @return {ReactComponent}
   */
  render(component) {
    return TestUtils.renderIntoDocument(component);
  },

  /**
   * renders component into DOM
   * @param  {ReactComponent} component - rendered component
   * @return {DOMElement}
   */
  renderDOM(component) {
    return React.findDOMNode(Utils.render(component));
  },

  /**
   * @type {TestUtils.Simulate}
   */
  simulate: TestUtils.Simulate
};

export default Utils;
