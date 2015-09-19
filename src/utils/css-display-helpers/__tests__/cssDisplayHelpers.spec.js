import React from 'react/addons';
import {Block, Flex} from 'app/utils/css-display-helpers/cssDisplayHelpers';
import {shallowOutput, findType} from 'app/utils/testHelpers';


describe('CSS display helper', () => {
  it('should correctly set props', () => {
    const component = shallowOutput(<Block className="foo" />);
    expect(component.props.className).to.equal('foo');
  });

  it('should correctly render children components', () => {
    const component = shallowOutput(<Flex>
      <Block>txt</Block>
    </Flex>
    );
    const child = findType(component, Block).props.children;
    expect(child).to.equal('txt');
  });
});
