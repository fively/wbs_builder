const assert = require('assert');

// eslint-disable-next-line no-undef
describe('webpack.base.js test case', () => {
  // eslint-disable-next-line global-require
  const baseConfig = require('../../lib/webpack.base');
  
  if ('entry', () => {
    assert.equal(baseConfig.entry.index, '');
  });

});
