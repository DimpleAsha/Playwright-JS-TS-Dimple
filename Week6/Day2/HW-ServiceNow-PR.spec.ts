//Service Now- CRUD- Problem request module

import{test,expect} from '@playwright/test'
import * as dotenv from 'dotenv'
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, './.env') });

let username = process.env.SN_USERNAME!;
let password = process.env.SN_PASSWORD!;
let value = Buffer.from(`${username}:${password}`).toString('base64');
console.log(value)
let ID : any[]

test.describe.serial("Execute below tests in serial manner", async()=>{


test("Create a Problem request using POST request in PW-API",async({request})=>{
    let response = await request.post("https://dev231684.service-now.com/api/now/table/problem",
    {
    headers:{
        "Content-Type" : "application/json",
        "Authorization" : `Basic ${value}`
    },
    data:{
        "short_description" : "This Problem request is created by Dimple"
    }
    
    })
    let res= await response.json()
    console.log(response.status())
    expect (response.status()).toBe(201)
    console.log(response.statusText())
    expect (response.statusText()).toBe("Created")

    ID = res.result.sys_id
    console.log(ID)
})


test("Fetch the above created Problem Request using GET", async({request})=>{
    let response = await request.get(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,{
        headers:{
            "Content-Type" : "application/json",
            "Authorization" : `Basic ${value}`
        }
    })
    let res = await response.json()
    console.log(response.status())
    expect (response.status()).toBe(200)

    console.log(response.statusText())
    expect (response.statusText()).toBe("OK")

})

test("Update the above created Problem Request", async({request})=>{
    let response = await request.patch(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,{
        headers:{
        "Content-Type" : "application/json",
        "Authorization" : `Basic ${value}`
    },
        data:{
        "short_description":"This Problem Request is updated by Dimple"
        }
    })
    let res = await response.json()
    console.log(response.status())
    expect (response.status()).toBe(200)

    console.log(response.statusText())
    expect (response.statusText()).toBe("OK")
})

test("delete the above Problem Request", async({request})=>{
    let response = await request.delete(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,{
        headers:{
            "Content-Type" : "application/json",
            "Authorization" : `Basic ${value}`
        }
    })
    console.log(response.status())
    expect (response.status()).toBe(204)

    console.log(response.statusText())
    expect (response.statusText()).toBe("No Content")
})

})