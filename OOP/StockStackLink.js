var util=require('./utility/utility');
var link=require('./utility/StockStackLink')
var stk=require('../DataStructure/Utility/StackUSingLinkList');
var fs=require('fs');
var rl=require('readline-sync');

var stkLink=new link.StockStackLink();
class StockStack{
    
    manage(){
        stkLink.addStack();
        do {
            console.log("\n1. Add Company Details. \n2. Display Company Details. \n3. Buy shares. \n4. Sell shares.\n5. Exit.\n");
            var ch = rl.question("Enter your choice:");
            switch (ch) {
                case "1":
                    stkLink.addCompany();
                    break;
                case "2":
                    stkLink.printStack()
                    break;
                case "3":
                    stkLink.buyShare()
                    break;
                case "4":
                    stkLink.sellShare();
                    break;
                case "5":
                    return;
                default:
                    console.log("Enter valid choice");
            }
        } while (ch <= 5);
        
    }
}
var invent=new StockStack()
invent.manage();