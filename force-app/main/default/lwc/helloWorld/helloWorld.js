import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track dynamicword = 'world';
    @track displayDiv = false;
    @track cityList = ['Jaipur', 'Ahmedabad','Delhi','Rajashthan'];
    greetingChangeHandler(event){
        this.dynamicword = event.target.value;
    }
    showDiv(event){
        this.displayDiv = !this.displayDiv;
    }
}