var util=require('./utility/utility');
var rl=require('readline-sync')
var value=require('./utility/StockDetails')
var stock=new value.Stock();
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
        stock.displayStockName(this.data);
        console.log("select the stock number:");
        var ch=util.inputIntegerRead();
        
        //Display stock Details
        stock.displayStock(ch-1);
        
        //purches requried shares & calculate the amount. 
        var shares = rl.question("Enter no of shares you want to purchase or buy:");
        if(shares>this.data.Stock[ch].StockValue) throw 'enter valid number'

        var totalPrice=stock.claculateStockPrice(ch,shares);
        console.log("Total Stock Price:"+totalPrice);   
    }

}
var stock=new StockReport();
stock.StockJson();