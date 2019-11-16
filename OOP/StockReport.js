var util=require('./utility/utility');
var rl=require('readline-sync')
class Stock{
    constructor(){
        var content=util.readFile('./jsonFile/stock.json');
        this.data=JSON.parse(content);
        console.log(this.data);
    }
}

class StockReport extends Stock{
    StockJson(){
        //print Stock Name
        this.displayStockName();
        console.log("select the stock number:");
        var ch=util.inputIntegerRead();
        
        //Display stock Details
        this.displayStock(ch-1);
        
        //purches requried shares & calculate the total stock price 
        var shares = rl.question("Enter no of shares you want to purchase or buy:");
        if(shares>this.data.Stock[ch].StockValue) throw 'enter valid number'
        var totalPrice=this.claculateStockPrice(ch,shares);
        console.log("Total Stock Price:"+totalPrice);   
    }
    displayStockName(){
        for(var i=0;i<this.data.Stock.length;i++){
            console.log((i+1)+"."+this.data.Stock[i].StockName);
        }
    }
    displayStock(ch){
        console.log("Stock Name :"+this.data.Stock[ch].StockName
        +"\nNumber Of Shares:"+this.data.Stock[ch].StockValue+"\nStock Price:"
        +this.data.Stock[ch].StockPrice);
    }
    claculateStockPrice(ch,shares){
        var value=this.data.Stock[ch].StockPrice*shares;
        return value
    }
}
var stock=new StockReport();
stock.StockJson();