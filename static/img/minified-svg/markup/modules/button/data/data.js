button: {
  test: 'Test text',
  checkArray : value => { return [ 'val1', 'val2' ].some( element => element == value ) ? value : null }
}