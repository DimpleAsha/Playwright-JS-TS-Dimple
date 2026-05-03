class APIClient{
    
    sendRequest(endPoint:string, requestBody?:string, requestStatus?:boolean):void{
        if(requestStatus){
            console.log("endPoint is: "+ endPoint,"while requestBody is: "+requestBody,"and request Successful is: " + requestStatus)
        }
        else{
            console.log("endPoint is: "+ endPoint," while requestBody is: absent and request Successful is: False" )
        }
    }
}

let obj2 = new APIClient()
obj2.sendRequest("APIDashboard","present", true)
obj2.sendRequest("APIDashboard")
