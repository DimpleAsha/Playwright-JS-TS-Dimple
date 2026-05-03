class LoginTest{
    public browserName:string = "Chrome"
    private password:string="admin123"
    protected userName:string = "tester"

    public openApplication(){
        console.log("Application is loaded")
    }

    public login(){
        //accessing the properties inside login--private and protected
        console.log(`Entering userName: ${this.userName}`)
        console.log(`Entering password: ${this.password}`)
        console.log(`Application runing on browser: ${this.browserName}`)
    }
}

let obj1 = new LoginTest()
obj1.openApplication()
obj1.login()