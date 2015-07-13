import React from 'react/addons';
import Header from '../index.js';
import styles from '../style.sass';

const TestUtils = React.addons.TestUtils;

describe('Header', () => {
  it('displays the title', () => {

    const header = TestUtils.renderIntoDocument(
      <Header />
    );

    const title = TestUtils.findRenderedDOMComponentWithClass(header, styles.title);
    const dom = React.findDOMNode(title);

    expect(dom.textContent).to.equal('React starter kit');
  });

  it('>>> showing testing components without DOM', () => {
    // http://simonsmith.io/unit-testing-react-components-without-a-dom/
    // https://news.ycombinator.com/item?id=9718117
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Header />);
    const component = shallowRenderer.getRenderOutput();

    expect(component.type).to.equal('header');
  });
});
