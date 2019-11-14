var rl=require('readline-sync');
var fs=require('fs');

class Inventory{
    constructor(){
        //read json file & store in inventory variable
        var data=fs.readFileSync('./jsonFile/inventory.json');
        this.inventory=JSON.parse(data);
        //console.log(details);
    }
}

class Invent extends Inventory{
    inventoryData(){
        //taking user input
        console.log("Inventory Details: \n1.Rice \n2.Pulses\n3.Wheat");
        var ch =rl.questionInt("Enter your choice:");
        if(isNaN(ch))throw "enter valid choice."
    
        switch(ch){
            case 1:
                var weight=rl.questionInt("enter how many kg you require:");
                for(var i=0;i<this.inventory.Rice.length;i++){
                    console.log();
                    console.log("\tRise:"+this.inventory.Rice[i].name+"\n\tPrice:"+this.inventory.Rice[i].price+"\n\tfor "+ weight+ " kg price is "+weight* this.inventory.Rice[i].price);
                }
                break;
    
                case 2:
                var weight=rl.questionInt("enter how many kg you require:");
                for(var i=0;i<this.inventory.Pulses.length;i++){
                    console.log();
                    console.log("\tRise:"+this.inventory.Pulses[i].name+"\n\tPrice:"+this.inventory.Pulses[i].price+"\n\tfor "+ weight+ " kg price is "+weight* this.inventory.Pulses[i].price);                
                }  
                break;
    
                case 3:
                var weight=rl.questionInt("enter how many kg you require:");
                for(var i=0;i<this.inventory.Wheats.length;i++){
                    console.log();
                    console.log("\tRise:"+this.inventory.Wheats[i].name+"\n\tPrice:"+this.inventory.Wheats[i].price+"\n\tfor "+ weight+ " kg price is "+weight* this.inventory.Wheats[i].price);
                } 
                break;
        }
    }
}
//function calling
var inv=new Invent()
inv.inventoryData();
