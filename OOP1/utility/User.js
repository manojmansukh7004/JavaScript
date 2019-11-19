var util=require('./utility')
var ll=require('../../DataStructure/Utility/LinkedList')
var rl=require('readline-sync');
var fs=require('fs');
var list =new ll.LinkedList

class Stock{
    constructor(){
        var content=util.readFile('./jsonFile/CustumerDetails.json');
        this.value=JSON.parse(content);
        //console.log(this.value);
        
    }
}
class User extends Stock{
    addList() {
        for (let key in this.value.Custumer) {
            list.addElement(this.value.Custumer[key]);
        }
       // list.printList().toString();
       // this.manage();
    }
    addUser(){
        var UserName = rl.question("Enter the name:");
        var Shares = rl.question("Enter the number of share:");
        var Price = rl.question("Enter the price of share:"); 
        let newCompany = {
            "UserName": UserName,
            "Shares": Shares,
            "Price": Price,
        }

        list.addElement(newCompany);
    }
    printList(){
        var current=list.head;
        while (current !== null) {
            console.log("\nUser Name:" + current.data.UserName);
            console.log("Number of share:" + current.data.Shares);
            console.log("Price:" + current.data.Price);
            current = current.next;
        }
    }
    removeUser(){
        var current=list.head;
        var UserName=rl.question("enter the user name you delete:");
        while(current.data.UserName.toLowerCase()!=UserName.toLowerCase() && current!=null){
            current=current.next;
        }
        if(current!=null){
            list.removeElement(current.data);
            console.log("Company detalis remove.Successfully...");
        }
        else{
            console.log("Company name not in the list");
            
        }
    }
    writeToFile(){
        this.value.Custumer=[];
        var current=list.head;
        while(current!=null){
            this.value.Custumer.push(current.data);
            current=current.next;
        }
        util.writeFile('./jsonFile/CustumerDetails.json',this.value)
    }
}
module.exports={
    User
}