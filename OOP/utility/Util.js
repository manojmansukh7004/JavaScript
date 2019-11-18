
var rl=require('readline-sync');
var fs=require('fs');


class Inventory{
    constructor(){
        //read json file & store in inventory variable
        var content=fs.readFileSync('./jsonFile/inventoryManager.json');
        this.data=JSON.parse(content);
        //console.log(invDetails);
    }
    add(){
        console.log("...Inventory Details...");
        var ch =rl.questionInt("choose Item for Update : \n1.Rice \n2.Pulses\n3.Wheat");
        if(isNaN(ch))throw "enter valid choice."
            switch(ch){
                case 1:
                    this.addRice();
                    break;        
                case 2:
                    this.addPulse();
                    break;
                case 3:
                    this.addWheats();
                    break;
            }
        fs.writeFileSync('./jsonFile/inventoryManager.json', JSON.stringify(this.data));
    }
    remove(){
        console.log("...Inventory Details...");
        var ch =rl.questionInt("choose Item for remove : \n1.Rice \n2.Pulses\n3.Wheat");
        if(isNaN(ch))throw "enter valid choice."
            switch(ch){
                case 1:
                    this.removeRice();
                    break;        
                case 2:
                    this.removePulse();
                    break;
                case 3:
                    this.removeWheats();
                    break;
            }
        fs.writeFileSync('./jsonFile/inventoryManager.json', JSON.stringify(this.data));
    }


    //taking user input
    addRice(){
        var name1=rl.question('enter the name :');
        var price1=rl.question('enter the price : ');
        var weight1=rl.question('enter the weight :');
        this.data.Rice.push({
            name:name1,
            weight:weight1,
            price:price1

         })
    }
    addPulse(){
        var name1=rl.question('enter the name :');
        var price1=rl.question('enter the price : ');
        var weight1=rl.question('enter the weight :');          
        this.data.Pulses.push({
            name:name1,
            weight:weight1,
            price:price1
          }) 
    }
    addWheats(){
        var name1=rl.question('enter the name :');
        var price1=rl.question('enter the price : ');
        var weight1=rl.question('enter the weight :');
        this.data.Wheat.push({
            name:name1,
            weight:weight1,
            price:price1
  
         })
    }
    removeRice(){
            var item=rl.question("Enter the rice Name:");
            for(var i=0;i<this.data.Rice.length;i++){
                if (this.data.Rice[i].name == item) {
                    var index = data.Rice.indexOf(this.data.Rice[i]);
    
                    this.data.Rice.splice(index, 1);
                }
            }
    }



}
module.exports={
    Inventory
}
//var minv  =new MInvent();
//minv.invManager();