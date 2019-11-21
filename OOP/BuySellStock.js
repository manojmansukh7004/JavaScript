var rl=require('readline-sync');
var stock=require('./utility/BuySellStock')
var details=require('./utility/User')
var fs=require('fs');
var buyShare=new stock.BuyShares();
var sellshare=new stock.SellShares();
var user=new details.User()

class BuySellStock {
    existingUser(){
        do{

            var ch =rl.questionInt("\npress\n1. Existing User.\n2. New User. \n3. Exit\n");
            if (ch == 1) {
                return ;
            }
            else if (ch == 2) {
                user.addUser();
                user.printList();
                user.writeToFile();
            }
            else if (ch == 3) {
                return
            }
            else {
                console.log("Invalid key/input ");
            }
        }while(ch!=4)    
    }
  
 BuySellStock(){
        do{

            var ch =rl.questionInt("\npress\n1. Purches Shares.\n2. Sell shares. \n3. Exit\n");
            if (ch == 1) {
                this.existingUser();
                sellshare.availableUser();
                var updateUser=rl.questionInt("Select the User (1 to n):");
                buyShare.availableStock();
                var ch=buyShare.infoStock();
                buyShare.purchaseStock(ch,updateUser)
            }
            else if (ch == 2) {
                this.existingUser();
                sellshare.availableUser();
               // var ch=rl.questionInt("Select the User (1 to n):");
                var ch=sellshare.userInfo();
                buyShare.availableStock();
                updateUser=rl.questionInt("\nSelect the Company for selling the shares:\n");
                //sellshare.availableUser();
                sellshare.sellStock(ch,updateUser);
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