const arr =  [3, 5, -4, 8, 11, 1, -1, -6]
const sum = 10
const result = [];
const hashSum = new Set()

arr.forEach(num => {
    const subtractValue = sum - num
    if (hashSum.has(subtractValue)) {
        result.push([num, subtractValue])
    } else {
        hashSum.add(num)
    }
})

console.log(result)

