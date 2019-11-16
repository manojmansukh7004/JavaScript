class Stock{
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

module.exports={
    Stock
}