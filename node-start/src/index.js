import { multy } from "./utils.js"
import {c} from "./helpers.js"

const variable = 123

fetch("https://freefakeapi.io/api/users").then(res=>{
    return res.json()
}).then(responseData=>{console.log(responseData)})

console.log("Hello world", multy(variable,2), c)