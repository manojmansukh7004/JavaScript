var util=require('./utility');
var rl=require('readline-sync')
//var util=require('./utility')


class Stock{
    constructor(){
        var content=util.readFile('./jsonFile/CompanyStock.json');
        this.data=JSON.parse(content);
        // var length=this.data.Company.length;
        // console.log(length);
        var user=util.readFile('./jsonFile/CustumerDetails.json');
        this.user=JSON.parse(user);
        //console.log(this.user);
    }
}
class BuyShares extends Stock{
   
    availableStock(){
        console.log("\n\t\tStock Account Management")
        this.displayStockName();
    }
    infoStock(){
        var length=this.data.Company.length;
        console.log("\nselect the company name for purches stock (1-n):");
        var choice=util.inputIntegerRead();
        if(choice<=0 || (choice-1)>=length) throw 'Enter Available Stock'
        //Display stock Details
        this.displayStock("\t"+choice-1);
        return choice;
    }
    purchaseStock(choice,updateUser){
        //console.log("update:"+this.user.Custumer[updateUser].UserName)
        var length=this.data.Company.length;
         //purches requried shares & calculate the total stock price 
        var shares = rl.questionInt("\nEnter number of shares you want to purchase or buy:");
        if(shares>length.NoOfShare) throw 'enter valid number'
        
        //calculate total Stock price 
        var totalPrice=this.claculateStockPrice(choice-1,shares);
        console.log("\nTotal Share Price:"+totalPrice);
        
        //calculateremaning stock in company
        var updatestock=this.buyStock(shares,choice-1);
        var  updateUserStock=this.userUdate(shares,updateUser-1)
        console.log("Remaning stock :"+ updatestock);
        console.log("Updated User Shares:"+updateUserStock);
       //update data into file
        var confirm=rl.questionInt("\nyou want to buy Shares for confirm Press 1 :")
        if(confirm===1){
             util.writeFile('./jsonFile/CompanyStock.json',this.data)
             util.writeFile('./jsonFile/CustumerDetails.json',this.user)

         }
    } 
    displayStockName(){
        for(var i=0;i<this.data.Company.length;i++){
            console.log((i+1)+"."+this.data.Company[i].NameOfCompany);
        }
    }
    displayStock(choice){
        console.log("NameOfCompany :"+this.data.Company[choice].NameOfCompany
        +"\nNumber Of Shares :"+this.data.Company[choice].NoOfShare+"\nStock Price :"
        +this.data.Company[choice].Price+"\nSymbol :"+this.data.Company[choice].symbol);
    }
    claculateStockPrice(choice,shares){
        var value=this.data.Company[choice].Price*shares;
        return value
    }
    buyStock(shares,choice){
       // console.log(this.data.Company[choice].NameOfCompany)
        this.data.Company[choice].NoOfShare=this.data.Company[choice].NoOfShare-shares;
        return this.data.Company[choice].NoOfShare;
    }
    userUdate(shares,updateUser){
        //7console.log("update12:"+this.user.Custumer[updateUser].Shares)
        this.user.Custumer[updateUser].Shares +=shares;
        return this.user.Custumer[updateUser].Shares;
    }
}
class SellShares extends Stock{
    availableUser(){
        console.log("\n\t\tStock Account Management")
        this.displayUserName();
    }
    userInfo(){
        var length=this.user.Custumer.length;
        console.log("\nselect the Custumer name for Sell Shares (1-n):");
        var choice=util.inputIntegerRead();
        if(choice<=0 || (choice-1)>=length) throw 'Enter Available Stock'
        //Display stock Details
        this.displayUserDetails("\t"+choice-1);
        return choice;
    }
    sellStock(choice,updateUser){
        //console.log("mj")
        var length=this.user.Custumer.length;
         //purches requried shares & calculate the total stock price 

        var shares = rl.questionInt("\nEnter number of shares you want to Sell :");
        if(shares>length.Shares) throw 'enter valid number'
        
        //calculate total Stock price 
        var totalPrice=this.claculateSharePrice(choice-1,shares);
        console.log("Total Share Price:"+totalPrice);
        
        //calculateremaning stock in company
        var updateShare=this.sellShares(shares,choice-1);
        var  updateUserStock=this.userUdate(shares,updateUser-1)
        console.log("Remaning stock :"+ updateShare);
        console.log("Updated User Shares:"+updateUserStock);

       //update data into file
        var confirm=rl.questionInt("\nyou want to buy Shares for confirm Press 1 :")
        if(confirm===1){
            util.writeFile('./jsonFile/CompanyStock.json',this.data)
            util.writeFile('./jsonFile/CustumerDetails.json',this.user)
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
        this.user.Custumer[choice].Shares=this.user.Custumer[choice].Shares-shares;
        return this.user.Custumer[choice].Shares;
    }
    userUdate(shares,updateUser){
        //console.log("update12:"+this.data.Company[updateUser].NameOfCompany)
        this.data.Company[updateUser].NoOfShare=this.data.Company[updateUser].NoOfShare+shares;
        return this.data.Company[updateUser].NoOfShare;

    }
}
// var ab=new SellShares()
// ab.availableUser();
// var ch=ab.userInfo();
// ab.sellStock(ch);
module.exports={
    BuyShares,
    SellShares
}