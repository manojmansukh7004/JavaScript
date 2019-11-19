var rl=require('readline-sync');
var stock=require('./utility/BuySellStock')
var fs=require('fs');
var buySell=new stock.BuySellStock();

class BuySellStock {
    manage(){
        do{
            var ch =rl.questionInt("\npress\n1. Purches Shares.\n2. Sell shares. \n3. Exit\n");
            if (ch == 1) {
                buySell.availableStock();
                var ch=buySell.infoStock();
                console.log(ch)
                buySell.purchaseStock(ch)
            }
            else if (ch == 2) {
                buySell.availableStock();
                buySell.infoStock();
            }
            else if (ch == 3) {
                return
            }
            else {
                console.log("Invalid key/input ");
            }
        }while(ch!=4)    
    }
}  
//var invent=new BuySellStock()
//invent.manage();
 module.exports={
     BuySellStock
}