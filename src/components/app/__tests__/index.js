import React from 'react/addons';
import ApplicationContainer, { Application } from '../index.js';
import Header from '../../header/index';
import Articles from '../../articles/index';
// import styles from '../style.sass';
import { stubRouterContext, findComponentWithType } from '../../../utils/test-utils';

console.log(findComponentWithType);

const { TestUtils } = React.addons;
// const shallowRenderer = TestUtils.createRenderer();

describe.only('Application', function () {
  it('displays the `Header` component', function () {
    const Subject = stubRouterContext(Application, {news: []});
    const application = TestUtils.renderIntoDocument(<Subject />);

    const header = TestUtils.findRenderedComponentWithType(application, Header);
    expect(header).to.be.an('object');
  });

  it('passes props to nested components', function () {
    const news = [
      {
        'article_id': 1,
        title: 'foo'
      }
    ];
    const Subject = stubRouterContext(Application, { news });
    const application = TestUtils.renderIntoDocument(<Subject />);

    const articles = findComponentWithType(application, Articles);
    expect(articles.props.news).to.include(news[0]);
  });

  // it('displays all subcomponents', () => {
  //   shallowRenderer.render(<Application news={[]} />);
  //   const component = shallowRenderer.getRenderOutput();
  //   console.log(component);
  //   expect(component.type).to.equal('header');
  // });
});
