import React from 'react/addons';

const {TestUtils} = React.addons;

function filterComponent(component, predicate) {
  let i;
  let results = [];
  if (predicate(component)) {
    results.push(component);
  }

  if (component && component.props && component.props.children && component.props.children.length) {
    for (i = 0; i < component.props.children.length; i++) {
      results = results.concat(filterComponent(component.props.children[i], predicate));
    }
  } else if (component && component.props && component.props.children) {
    results = results.concat(filterComponent(component.props.children, predicate));
  }

  return results;
}


/**
 * Renders and returns the output of a shallow react component
 *
 * @param {string|React} component string or React component
 * @param {object} props component props
 * @param {array} children component children
 * @return {object} Object containing the shallow rendered components output.
 */
export function shallowOutput(component, props, ...children) {
  const renderer = React.addons.TestUtils.createRenderer();
  let componentEl = component;
  if (!component.type) {
    componentEl = React.createElement(component, props, children);
  }
  renderer.render(componentEl);
  return renderer.getRenderOutput();
}


export function renderWithContext(makeComponent, context = {}) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(makeComponent(), context);
  return shallowRenderer.getRenderOutput();
}

export const filter = filterComponent;

export function find() {
  return filterComponent.apply(this, arguments)[0];
}
export function hasClass(component, className) {
  const classes = component && component.props && component.props.className || '';
  const classArr = classes.split(' ');
  return classArr.indexOf(className) !== -1;
}

export function isType(component, type) {
  return component.type === type;
}

export function findType(component, type) {
  return find(component, c => isType(c, type));
}

export function filterType(component, type) {
  return filter(component, c => isType(c, type));
}

export function findClass(component, className) {
  return find(component, c => hasClass(c, className));
}

export function filterClass(component, className) {
  return filter(component, c => hasClass(c, className));
}
