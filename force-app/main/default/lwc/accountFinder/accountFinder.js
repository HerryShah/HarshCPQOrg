import { LightningElement } from 'lwc';

export default class AccountFinder extends LightningElement {
    annualRevenue;
    handleChange(event){
        var value;
        value = event.target.value;
        this.annualRevenue = value;
    }
    reset(event) {
        this.annualRevenue = '';
    }
}