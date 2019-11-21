var util=require('./utility');
var rl=require('readline-sync')
//var util=require('./u')


class Stock{
    constructor(){
        
        var user=util.readFile('./jsonFile/CustumerDetails.json');
        this.user=JSON.parse(user);
        //console.log(this.user);
    }
}

class SellShares extends Stock{
    availableUser(){
        console.log("\n\t\tStock Account Management")
        this.displayUserName();
    }
    userInfo(){
        var length=this.user.Custumer.length;
        console.log("select the Custumer name for Sell Shares (1-n):");
        var choice=util.inputIntegerRead();
        if(choice<=0 || (choice-1)>=length) throw 'Enter Available Stock'
        //Display stock Details
        this.displayUserDetails("\t"+choice-1);
        return choice;
    }
    sellStock(choice){
        //console.log("mj")
        var length=this.data.Custumer.length;
         //purches requried shares & calculate the total stock price 
        var shares = rl.question("Enter number of shares you want to Sell or buy:");
        if(shares>length.Shares) throw 'enter valid number'
        
        //calculate total Stock price 
        var totalPrice=this.claculateSharePrice(choice-1,shares);
        console.log("Total Share Price:"+totalPrice);
        
        //calculateremaning stock in company
        var updateShare=this.sellShares(shares,choice-1);
        console.log("Remaning stock :"+ updateShare);
       //update data into file
        var confirm=rl.questionInt("you want to buy Shares for confirm Press 1 :")
        if(confirm===1){
             util.writeFile('./jsonFile/CompanyStock.json',this.user)
         }
    } 
    displayUserName(){
        for(var i=0;i<this.user.Custumer.length;i++){
            console.log((i+1)+"."+this.user.Custumer[i].UserName);
        }
    }
    displayUserDetails(choice){
        console.log("Custumer Name :"+this.user.Custumer[choice].UserName
        +"\nNumber Of Shares :"+this.user.Custumer[choice].Shares+"\nShare Price :"
        +this.user.Custumer[choice].Price+"\n");
    }
    claculateSharePrice(choice,shares){
        var value=this.user.Custumer[choice].Price*shares;
        return value;
    }
    sellShares(shares,choice){
       // console.log(this.data.Company[choice].NameOfCompany)
        this.user.Custumer[choice].NoOfShare=this.user.Custumer[choice].Shares-shares;
        return this.user.Custumer[choice].Shares;
    }
}
var ab=new SellShares()
ab.availableUser();