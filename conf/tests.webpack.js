require('babel/polyfill');

var context = require.context('../src', true, /__tests__/);
context.keys().forEach(context);
console.log('Loaded tests files', context.keys());
