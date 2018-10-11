const WaspLinkQuery = require('../src/query');

describe('Testing WaspLinkQuery', function() {
  it('If the query is not an object throw an error', () => {
    expect(() => {
      WaspLinkQuery('props', 'wrong', { key: 'val' });
    }).toThrow('Query must be a GQL Object.');
  });

  it('If variables is not an object throw an error', () => {
    expect(() => {
      WaspLinkQuery('props', { key: 'val' }, 'wrong');
    }).toThrow('Query must be an Object.');
  });
});
