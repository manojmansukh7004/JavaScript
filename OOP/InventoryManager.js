var rl=require('readline-sync');
var util=require('./utility/Util')
var fs=require('fs');
var item=new util.Inventory();

class InventoryManger {
    manage(){
        var ch =rl.questionInt("press\n1. Add\n2. Delete\n3. Display\n4. Exit\n");
        if (ch == 1) {
            item.add()
        }
        else if (ch == 2) {
            this.remove();
        }
        else if (ch == 3) {
            this.display();
        }
        else if (ch == 4) {
            this.exit();
        }
        else {
            console.log("Invalid key/input ");
        }
    }
}  
var inv=new InventoryManger()
inv.manage();