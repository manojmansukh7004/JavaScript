var util=require('./utility');
var rl=require('readline-sync')

class Stock{
    constructor(){
        var content=util.readFile('./jsonFile/CompanyStock.json');
        this.data=JSON.parse(content);
        var length=this.data.Company.length;
        console.log(length);
    }
}
class BuySellStock extends Stock{
   
    availableStock(){
        console.log("\n\t\tStock Account Management")
        this.displayStockName();
    }
    infoStock(){
        var length=this.data.Company.length;
        console.log("select the stock (1-n):");
        var choice=util.inputIntegerRead();
        if(choice<=0 || (choice-1)>=length) throw 'Enter Available Stock'
        //Display stock Details
        this.displayStock("\t"+choice-1);
        return choice;
    }
    buyStock(choice){
        var length=this.data.Company.length;
         //purches requried shares & calculate the total stock price 
        var shares = rl.question("Enter no of shares you want to purchase or buy:");

        
        if(shares>length.NoOfShare) throw 'enter valid number'
        var totalPrice=this.claculateStockPrice(choice-1,shares);
        console.log("Total Stock Price:"+totalPrice);   
    } 

    displayStockName(){
        for(var i=0;i<this.data.Company.length;i++){
            console.log((i+1)+"."+this.data.Company[i].NameOfCompany);
        }
    }
    displayStock(choice){
        console.log("NameOfCompany :"+this.data.Company[choice].NameOfCompany
        +"\nNumber Of Shares :"+this.data.Company[choice].NoOfShare+"\nStock Price :"
        +this.data.Company[choice].Price+"\nSymbol :"+this.data.Company[choice].symbol);
    }
    claculateStockPrice(choice,shares){
        var value=this.data.Company[choice].Price*shares;
        return value
    }
}
module.exports={
    BuySellStock
}