var u = require('./utility/utility');
var fs = require('fs');
var rl = require('readline-sync');
var stck = require('../DataStructure/Utility/StackUSingLinkList')

class Stack {
    constructor() {
        var company = fs.readFileSync('./jsonFile/CompanyStock1.json', 'utf8');
        this.comp = JSON.parse(company);
        var customer = fs.readFileSync('./jsonFile/CustumerDetails1.json');
        this.cust = JSON.parse(customer);
        this.stack = new stck.StackUsingLinkList();
    }
}
class StockStack extends Stack{
    
    addStack(){

        do {
            console.log("\n1. Buy shares\n2. Sell shares\n3. Print company record\n4. Print customer record\n5. Write to file\n6. Print stack\n");
            var ch = rl.question("Enter your choice:");
            switch (ch) {
                case "1":
                    this.buyStack();
                    break;
                case "2":
                    this.sellStack();
                    break;
                case "3":
                    this.printCompany();
                    break;
                case "4":
                    this.printCustomer();
                    break;
                case "5":
                    this.writeToFileStack();
                    break;
                case "6":
                    this.printStack();
                    break;
                default:
                    console.log("Enter valid choice");
            }
        } while (ch <= 6);
        
    }


    buyStack() {

        var userName = rl.question("Enter customer name:");
        var NameOfCompany = rl.question("Enter name of the company:");
        var found = false;
        var symbol;
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == NameOfCompany) {
                found = true;
                symbol = this.comp.company[key].symbol;
            }
        }
        if (found == true) {
            this.buyShare(userName);
            this.stack.push(symbol + "'s shares bought");
        }
        else {
            console.log("Company not found");
        }

    }

    sellStack() {

        var userName = rl.question("Enter customer name:");
        var NameOfCompany = rl.question("Enter name of the company:");
        var found = false;
        var symbol;
        for (let key in this.comp.company) {
            if (this.comp.company[key].NameOfCompany == NameOfCompany) {
                found = true;
                symbol = this.comp.company[key].symbol;
            }
        }
        if (found == true) {
            this.sellShare(userName);
            this.stack.push(symbol + "'s shares sold ");
        }
        else {
            console.log("Company not found");
        }
    }

    buyShare(userName) {
        let symbol1 = rl.question("Enter symbol of the company to buy share:");
        var i, check = false;
        for (let key in this.comp.company) {
            if (this.comp.company[key].symbol== symbol1){
                i = key;
                check = true;
                break;
            }
        }
        if (check) {
            console.log(this.comp.company);
            let num = rl.questionInt("Enter number of shares you want to buy:");
            for (let key in this.cust.customer) {
                if (this.cust.customer[key].userName == userName) {
                    if (num <= this.comp.company[i].NoOfShare) {
                        this.cust.customer[key].share += num;
                        this.cust.customer[key].amount -= num * this.comp.company[i].Price;
                        this.comp.company[i].NoOfShare -= num;
                        return this.comp.company[i].symbol;
                    }
                }
            }
        }
        else {
            console.log("company not found")
        }
    }

    sellShare(userName) {
        let symbol2 = rl.question("Enter symbol of the company to sell share:");
        var i, check = false;
        for (let key in this.comp.company) {
            if (this.comp.company[key].symbol == symbol2) {
                i = key;
                console.log(this.comp.company[i].NoOfShare)
                check = true;
                break;
            }
        }
        if (check) {
            console.log(this.comp.company);
            let num = rl.questionInt("Enter number of shares you want to sell:");
            
            for (let key in this.cust.customer) {
                
                if (this.cust.customer[key].userName == userName) {
                    if (num <= this.cust.customer[key].share) {
                        this.cust.customer[key].share -= num;
                        this.comp.company[i].NoOfShare += num;
                        this.cust.customer[key].amount += num * this.comp.company[i].price;
                        return this.comp.company[i].symbol;
                    }
                }
            }
        }
        else {
            console.log("company not found")
        }
    }
    printCompany() {
        for (let key in this.comp.company) {
            console.log(this.comp.company[key]);
        }
    }

    printCustomer() {
        for (let key in this.cust.customer) {
            console.log(this.cust.customer[key]);
        }
        // var userName = rl.question("Enter customer name:");
        // for (let key in this.cust.customer) {
        //     if (this.cust.customer[key].userName == userName) {
        //         console.log(this.cust.customer[key]);
        //     }
        // }
    }

    printStack() {
        this.stack.display();
    }

    writeToFileStack() {
        fs.writeFileSync('./jsonFile/CompanyStock1.json', JSON.stringify(this.comp));
        fs.writeFileSync('./jsonFile/CustumerDetails1.json', JSON.stringify(this.cust));
    }

}


var stk = new StockStack();
stk.addStack();