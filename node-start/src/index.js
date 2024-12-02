import './scss/styles.scss';
import {ApiClient} from "./ApiClient.ts"

const variable = 123

ApiClient.getUsers().then(responseData=>{console.log(responseData)})
//ApiClient.addPost({userId: 1, body: "Lorem ipsum", title: "test"}).then(responseData=>{console.log(responseData)})



//npm install --save-dev typescript ts-loader

//npx tsc --init

