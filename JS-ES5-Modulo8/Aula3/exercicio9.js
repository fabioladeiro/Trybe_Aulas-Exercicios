const assert = require('assert');

function change(param) {
  return !param;
}

//Utilize assert.ok() para testar uma condição
assert.ok(change(5) === false);
// assert.equal(change(5), false);
