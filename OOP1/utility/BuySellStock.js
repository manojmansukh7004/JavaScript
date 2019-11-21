var util=require('./utility');
var rl=require('readline-sync')
var util=require('./utility')


class Stock{
    constructor(){
        var content=util.readFile('./jsonFile/CompanyStock.json');
        this.data=JSON.parse(content);
        var length=this.data.Company.length;
        console.log(length);
        var user=util.readFile('./jsonFile/CustumerDetails.json');
        this.user=JSON.parse(user);
        //console.log(this.user);
    }
}
class BuySellStock extends Stock{
   
    availableStock(){
        console.log("\n\t\tStock Account Management")
        this.displayStockName();
    }
    infoStock(){
        //3console.log("mj")

        var length=this.data.Company.length;
        console.log("select the company name for purches stock (1-n):");
        var choice=util.inputIntegerRead();
        if(choice<=0 || (choice-1)>=length) throw 'Enter Available Stock'
        //Display stock Details
        this.displayStock("\t"+choice-1);
        return choice;
    }
    purchaseStock(choice){
        //console.log("mj")
        var length=this.data.Company.length;
         //purches requried shares & calculate the total stock price 
        var shares = rl.question("Enter no of shares you want to purchase or buy:");
        if(shares>length.NoOfShare) throw 'enter valid number'
        
        //calculate total Stock price 
        var totalPrice=this.claculateStockPrice(choice-1,shares);
        console.log("Total Stock Price:"+totalPrice);
        
        //calculateremaning stock in company
        var updatestock=this.buyStock(shares,choice-1);
        console.log("total stock value:"+ updatestock);
       //update data into file
        var confirm=rl.questionInt("you want to buy Stock (press 1 for confirm):")
        if(confirm===1){
             util.writeFile('./jsonFile/CompanyStock.json',this.data)
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
   
}

module.exports={
    BuySellStock
}