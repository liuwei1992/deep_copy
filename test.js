import deepCopy from './lib/index.js'

const map1 = new Map()

map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)

const symbolKey = Symbol('key')

const obj = {
  v1: 'v1111',
  v2: 'v222',
  obj: {
    o1: 'o1',
    o2: [1, 2, 3],
  },
  setobj: new Set([{ ss1: 'ss1' }, 2, 3]),
  map: map1,
  fn: function () {
    console.log('11111111')
  },
  sym: Symbol(1),
  symbolKey: 'hahaha',
}

obj['self'] = obj

const copy = deepCopy(obj)
obj.obj.o2[2] = 'lllllll'

console.log(obj)
console.log(copy)
