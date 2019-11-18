var util=require('./utility');
var rl=require('readline-sync')

class Stock{
    constructor(){
        var content=util.readFile('./jsonFile/stock.json');
        this.data=JSON.parse(content);
        var length=this.data.Stock.length;
        console.log(length);
    }
}
class StockDetails extends Stock{
   
    availableStock(){
        console.log("\n\t\tStock Account Management")
        this.displayStockName();
    }
    infoStock(){
        var length=this.data.Stock.length;
        console.log("select the stock (1-n):");
        var choice=util.inputIntegerRead();
        if(choice<=0 || (choice-1)>=length) throw 'Enter Available Stock'
        //Display stock Details
        this.displayStock("\t"+choice-1);
        return choice;
    }
    buyStock(choice){
        var length=this.data.Stock.length;
         //purches requried shares & calculate the total stock price 
        var shares = rl.question("Enter no of shares you want to purchase or buy:");

        
        if(shares>length.StockValue) throw 'enter valid number'
        var totalPrice=this.claculateStockPrice(choice-1,shares);
        console.log("Total Stock Price:"+totalPrice);   
    } 

    displayStockName(){
        for(var i=0;i<this.data.Stock.length;i++){
            console.log((i+1)+"."+this.data.Stock[i].StockName);
        }
    }
    displayStock(choice){
        console.log("Stock Name :"+this.data.Stock[choice].StockName
        +"\nNumber Of Shares:"+this.data.Stock[choice].StockValue+"\nStock Price:"
        +this.data.Stock[choice].StockPrice);
    }
    claculateStockPrice(choice,shares){
        var value=this.data.Stock[choice].StockPrice*shares;
        return value
    }
}
module.exports={
    StockDetails
}