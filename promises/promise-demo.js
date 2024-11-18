console.log("1")
const promise = new Promise((resolve, reject)=>{
    console.log("2")
    setTimeout(()=> {
        console.log("3")
        resolve(1234)
    },3000)
}).then((result)=>{
    console.log("4 ", result)
})

console.log("5")

