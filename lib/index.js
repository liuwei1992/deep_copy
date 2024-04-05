import isObject from './is_object.js'

function deepCopy(obj) {
  if (!isObject(obj)) return obj

  // 函数类型 直接复制索引，不重新定义函数
  if (typeof obj === 'function') return obj

  if (typeof obj === 'symbol') return new Symbol(obj.description)

  let copyObj
  if (obj instanceof Set) {
    copyObj = new Set()
    for (const item of obj) {
      copyObj.add(deepCopy(item))
    }
  } else if (obj instanceof Map) {
    copyObj = new Map()
    for (const [key, value] of obj) {
      copyObj.set(key, deepCopy(value))
    }
  } else {
    copyObj = obj instanceof Array ? [] : {}
    for (const key in obj) {
      const val = obj[key]

      // 指像自己的属性 抛弃
      if (obj[key] === obj) continue

      copyObj[key] = deepCopy(val)
    }

    // key 是 symnol 类型是 for in 遍历不到
    for (const symKey of Object.getOwnPropertySymbols(obj)) {
      copyObj[Symbol(symKey.description)] = deepCopy(obj[symKey])
    }
  }

  return copyObj
}

export default deepCopy
