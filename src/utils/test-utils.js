import React from 'react/addons';

const { TestUtils } = React.addons;

function stubRouterContext(Component, props, stubs) {

  const RouterStub = Object.assign({}, {
    makePath() {},
    makeHref() {},
    transitionTo() {},
    replaceWith() {},
    goBack() {},
    go() {},
    goForward() {},
    getCurrentPath() {},
    getCurrentRoutes() {},
    getCurrentPathname() {},
    getCurrentParams() {},
    getCurrentQuery() {},
    isActive() {},
    getRouteAtDepth() {},
    setRouteComponentAtDepth() {}
  }, stubs);

  return React.createClass({
    childContextTypes: {
      router: React.PropTypes.object,
      routeDepth: React.PropTypes.number
    },

    getChildContext() {
      return {
        router: RouterStub,
        routeDepth: 0
      };
    },

    render() {
      return <Component {...props} />;
    }
  });
}

function findComponentWithType(tree, type) {
  return TestUtils.findAllInRenderedTree(tree, function (c) {
    return type === c.constructor;
  })[0];
}


export { stubRouterContext, findComponentWithType };
