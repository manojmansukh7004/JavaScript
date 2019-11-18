var ll=require('../DataStructure/Utility/LinkedList');
var util=require('./utility/utility')
var details=require('./utility/User')
var stock=require('./BuySellStock')
var rl=require('readline-sync');
var fs=require('fs');

var buySell=new stock.BuySellStock();
var user=new details.User()
class User {
    user(){
            user.addList();
        do {
            console.log("\n1. Register USer \n2. Remove User\n3. Print User list\n4. Save to file\n5. Buy or Sell the Stock \n6. Exit");
            var ch = rl.question("Enter your choice:");
            switch (ch) {
                case "1":
                    user.addUser();
                    break;
                case "2":
                    user.removeUser();
                    break;
                case "3":
                    user.printList();
                    break;
                case "4":
                    user.writeToFile();
                    break;
                case "5":
                    buySell.manage()
                    break;    
                case "6":
                    return; 
                default:
                    console.log("Enter valid choice");
            }
        } while (ch <= 5);
    }
    

}
//var stock = new User();
//stock.user();

module.exports={
    User
}