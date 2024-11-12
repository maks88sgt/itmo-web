const arr = new Array(35000000).fill(10)

arr.map((i, index)=>i*index)

arr.shift(2)

console.log("analytics выполнен с defer:", Date.now());
