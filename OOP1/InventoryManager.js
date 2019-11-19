var rl=require('readline-sync');
var inventory=require('./utility/InventoryDetails')
var fs=require('fs');
var item=new inventory.InventoryDetails();

class InventoryManger {
    manage(){
        do{
            var ch =rl.questionInt("press\n1. Add\n2. Delete\n3. Display\n4. Exit\n");
            if (ch == 1) {
                item.add()
            }
            else if (ch == 2) {
                item.remove();
            }
            else if (ch == 3) {
                item.display();
            }
            else if (ch == 4) {
                return;
            }
            else {
                console.log("Invalid key/input ");
            }
        }while(ch!=4)    
    }
}  
var invent=new InventoryManger()
invent.manage();