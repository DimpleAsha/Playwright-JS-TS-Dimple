//base class
export class WebComponent {
    selector;
    constructor(selector) {
        this.selector = selector; //current instance of the class "this"-- property inside the constructor or method
        console.log(this.selector);
    }
    click() {
        console.log(`The element clicked is: ${this.selector}`);
    }
    focus() {
        console.log(`The element focussed is : ${this.selector}`);
    }
}
class Button extends WebComponent {
    click() {
        super.click();
        console.log("This click is in particular is done on a button element");
    }
}
class TextInput extends WebComponent {
    value = "";
    enterText(text) {
        this.value = text;
        console.log(`The value is entered is ${this.value} into the ${this.selector}`);
    }
}
function testComponents() {
    let Btn = new Button("subitBtn");
    let textField = new TextInput("Dimple77");
    textField.focus();
    textField.enterText("QA tester");
    Btn.click();
}
testComponents();
