//base class
class WebComponent{
    selector :any
    constructor(selector:any) {
    this.selector = selector//current instance of the class "this"-- property inside the constructor or method
    console.log(this.selector)
    }
    click(){
        console.log(`The element clicked is: ${this.selector}`)
    }
    focus(){
        console.log(`The element focussed is : ${this .selector}`)
    }
}


class Button extends WebComponent{
    click(){
        super.click()
        console.log("Button specific click is performed")
    }

}
class TextInput extends WebComponent{
    value:string=""
    enterText(text:string){
        this.value= text
        console.log(`The value entered is ${this.value} into the ${this.selector}`)
    }
}

function testComponents(){
   let Btn = new Button("subitBtn")
   let textField = new TextInput("UserName")
   
   textField.focus()
   textField.enterText("Dimple-Tester")
   Btn.click()
}

testComponents()

