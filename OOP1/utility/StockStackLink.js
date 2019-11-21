var fs=require('fs');
var rl=require('readline-sync');
var util=require('./utility');
var stk=require('../../DataStructure/Utility/StackUSingLinkList')
var stack=new stk.StackUsingLinkList();

class Stock {
    
    constructor() {
        var content=util.readFile('./jsonFile/CompanyStock.json');
        this.comp=JSON.parse(content);
        //console.log(this.comp);
        
        var user=util.readFile('./jsonFile/CustumerDetails.json');
        this.user=JSON.parse(user);
        //console.log(this.user);
        var stack=new stk.StackUsingLinkList();
    }
}
class StockStackLink extends Stock{
    addStack() {
        for (let key in this.comp.Company) {
            stack.push(this.comp.Company[key]);
        }
        stack.display();
       // list.printList().toString();
        //this.manage();
    }
    addCompany(){
        var NameOfCompany = rl.question("Enter the name of company:");
        var Symbol = rl.question("Enter the symbol of company:");
        var NoOfShare = rl.question("Enter the number of share:");
        var Price = rl.question("Enter the price of share:"); 
        let newCompany = {
            "NameOfCompany": NameOfCompany,
            "NoOfShare": NoOfShare,
            "Price": Price,
            "Symbol": Symbol
        }

        stack.push(newCompany);
    }
    printStack(){
        var current=stack.top;
        while (current !== null) {
            console.log("\nName Of the company:" + current.data.NameOfCompany);
            console.log("Symbol of the company:" + current.data.Symbol);
            console.log("Number of share:" + current.data.NoOfShare);
            console.log("Price:" + current.data.Price);
            current = current.next
        }
    }
    buyShare(){
        this.availableStock();
        var ch=this.infoStock();
        this.buyStock(ch);
    }
    
    sellShare(){

    }
    availableStock(){
        console.log("\n\t\tStock Account Management")
        this.displayStockName();
    }
    infoStock(){
        var length=this.comp.Company.length;
        console.log("select the stock (1-n):");
        var choice=util.inputIntegerRead();
        if(choice<=0 || (choice-1)>=length) throw 'Enter Available Stock'
        //Display stock Details
        this.displayStock("\t"+choice-1);
        return choice;
    }
    buyStock(choice){
        var length=this.comp.Company.length;
         //purches requried shares & calculate the total stock price 
        var shares = rl.question("Enter no of shares you want to purchase or buy:");

        
        if(shares>length.NoOfShare) throw 'enter valid number'
        var totalPrice=this.claculateStockPrice(choice-1,shares);
        console.log("Total Stock Price:"+totalPrice);   
    } 

    displayStockName(){
        for(var i=0;i<this.comp.Company.length;i++){
            console.log((i+1)+"."+this.comp.Company[i].NameOfCompany);
        }
    }
    displayStock(choice){
        console.log("NameOfCompany :"+this.comp.Company[choice].NameOfCompany
        +"\nNumber Of Shares :"+this.comp.Company[choice].NoOfShare+"\nStock Price :"
        +this.comp.Company[choice].Price+"\nSymbol :"+this.comp.Company[choice].symbol);
    }
    claculateStockPrice(choice,shares){
        var value=this.comp.Company[choice].Price*shares;
        return value
    }
}

module.exports={
    StockStackLink
}