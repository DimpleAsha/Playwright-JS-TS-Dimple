export class LoginTest {
    browserName = "Chrome";
    password = "admin123";
    userName = "tester";
    openApplication() {
        console.log("Application is loaded");
    }
    login() {
        //accessing the properties inside login--private and protected
        console.log(`Logging in with user: ${this.userName}`);
        console.log(`Using password: ${this.password}`);
        console.log(`Running on browser: ${this.browserName}`);
    }
}
let obj = new LoginTest();
obj.openApplication();
obj.login();
