const arr2 = new Array(10000000).fill(10)

arr2.map((i, index)=>i*index)

arr2.shift(2)

console.log("main выполнен с async:", Date.now());


