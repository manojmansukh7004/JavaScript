var rl=require('readline-sync');
var inventory=require('./utility/StockDetails')
var fs=require('fs');
var stock=new inventory.StockDetails();

class StockReport {
    manage(){
        do{
            var ch =rl.questionInt("\npress\n1. Display available stock.\n2. information of specific stock\n3. shares you want to purchase or buy\n4. Exit\n");
            if (ch == 1) {
                stock.availableStock();
            }
            else if (ch == 2) {
                stock.availableStock();
                stock.infoStock();
            }
            else if (ch == 3) {
                stock.availableStock();
                var ch=stock.infoStock();
                stock.buyStock(ch);
            }
            else if (ch == 4) {
                return;
            }
            else {
                console.log("Invalid key/input ");
            }
        }while(ch!=4)    
    }
}  
var invent=new StockReport()
invent.manage();