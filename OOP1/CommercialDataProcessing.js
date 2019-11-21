var company=require('./Company');
var user=require('./User')
var rl=require('readline-sync');

var comp = new company.Company();
var user=new  user.User();

class CommercialDataProcessing{
    manage(){
        do {
            console.log("\n1. Company Login \n2. User Login \n3. Exit\n");
            var ch = rl.question("Enter your choice:");
            switch (ch) {
                case "1":
                    comp.company();
                    break;
                case "2":
                    user.user();
                    break;
                case "3":
                    return;
                default:
                    console.log("Enter valid choice");
            }
        } while (ch <= 3);
    }    
}
var start=new CommercialDataProcessing();
start.manage();