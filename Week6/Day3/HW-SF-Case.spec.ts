import{test,expect} from '@playwright/test'
import * as dotenv from 'dotenv'
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, './.env') });

let URL :any
let Token :any
let tokenType :any
let ID:any
test.describe.serial("Execute the below tests in serial manner", async()=>{
test("Generate Token using Post request in PW-API", async({request})=>{
    let response = await request.post("https://login.salesforce.com/services/oauth2/token",{
        headers:{
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        form:{
            "grant_type": "password",
                "client_id": process.env.SF_CLIENT_ID!,
                "client_secret": process.env.SF_CLIENT_SECRET!,
                "username": process.env.SF_API_USERNAME!,
                "password": process.env.SF_API_PASSWORD!
        }
    })
    let res = await response.json()
    console.log(res)
    console.log(response.status())
    expect (response.status()).toBe(200)

    console.log(response.statusText())
    expect (response.statusText()).toBe("OK")

    URL = await res.instance_url
    console.log(URL)

    Token= await res.access_token
    console.log(Token)

    tokenType = await res.token_type
    console.log(tokenType)
})

test(" Create a Case in SF using POST and Token, URL in PW-API", async({request})=>{
    let response = await request.post(`${URL}/services/data/v65.0/sobjects/Case`,{
        headers:{
            "Content-Type": "application/json",
            "Authorization" : `${tokenType} ${Token}`
        },
        data:{
            "Status" : "Working",
            "Origin" : "Email"
        }
    })
    let res =await response.json()
    console.log(response.status())
    expect (response.status()).toBe(201)
    console.log(response.statusText())
    expect (response.statusText()).toBe("Created")

    ID = res.id
    console.log(ID)
})

test("Fetch the above cretaed Case in SF using Fetch in PW-API", async({request})=>{
    let response = await request.fetch(`${URL}/services/data/v65.0/sobjects/Case/${ID}`,{
        headers:{
            "Content-Type" :"application/json",
            "Authorization" : `${tokenType} ${Token}`
        }
    })
    let res = await response.json()
    console.log(response.status())
    expect (response.status()).toBe(200)

    console.log(response.statusText())
    expect (response.statusText()).toBe("OK")
})

test("Update the Case in SF using Patch in PW-API", async({request})=>{
    let response = await request.patch(`${URL}/services/data/v65.0/sobjects/Case/${ID}`,{
        headers:{
            "Content-Type" : "application/json",
            "Authorization" : `${tokenType} ${Token}`
        },
        data:{
            "Status" : "Escalated"
        }
    })
    console.log(response.status())
    expect (response.status()).toBe(204)

    console.log(response.statusText())
    expect (response.statusText()).toBe("No Content")
})

test("delete the Case from SF using Delete in PW-API", async({request})=>{
    let response = await request.delete(`${URL}/services/data/v65.0/sobjects/Case/${ID}`,{
        headers:{
            "Content-Type" : "application/json",
            "Authorization" : `${tokenType} ${Token}`
        }
    })
    console.log(response.status())
    expect (response.status()).toBe(204)

    console.log(response.statusText())
    expect (response.statusText()).toBe("No Content")
})

})