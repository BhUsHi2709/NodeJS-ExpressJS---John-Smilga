const _ = require("lodash")

const items = [1,[2,[3,[4]]]]
const newItems = _.flatMap(items)

console.log(newItems)