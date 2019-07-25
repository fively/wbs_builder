const glob = require('glob-all');

// eslint-disable-next-line no-undef
describe('Checking generated css js files', () => {
  // eslint-disable-next-line no-undef
  it('shoule generate files files', (done) => {
    const files = glob.sync([
      './dist/js/index_*.js',
      './dist/css/index_*.css',
      './dist/js/search_*.js',
      './dist/css/search_*.css',
    ]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('css js files generated');
    }
  });
});
