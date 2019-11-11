var rl=require('readline-sync');

module.exports={

    random(){
        var random=Math.random()*3;
        var tic;
        if(random<1){
            tic=0;
        }
        else if(random>=1 && random<2){
            tic=1;
        }
        else if(random>=2 && random<3){
            tic=2;
        }return tic;
    },
//move 0
    autoPlay(arr,move,count){
        var row=this.random();
        var col=this.random();

        if(arr[row][col]=="*" && count<10){
            arr[row][col]="x";
            console.log("\n");
            this.printBoard(arr);
            count++;
            move=1;
            this.autoWin(arr,move,count);
        }
        else{
            console.log("Coulumn occupied");
            this.autoPlay(arr,move, count);
        }

    },

    playerMove(arr,move,count){
        var win =0;
        if(win==0){
        var row=rl.questionInt("enter the row:");
        var col=rl.questionInt("enter the col:");

        if(arr[row][col]=="*" && count<10){
            arr[row][col]="0";

            this.printBoard(arr);
            count++;
            move=0;
            this.playerWin(arr,move,count);

        }
        else{
            console.log("Coulumn occupied");
            this.playerMove(arr,move, count);
        }
    }

    },
    printBoard(arr){
        var arrText='';
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                     arrText+=arr[i][j]+' ';
            }
                console.log(arrText);
                arrText='';
        }
    },

    autoWin(arr,move,count){
        var win=1;
        //if(win=0){
            if( count<=9){
                for(i=0,j=0;i<3,j<3;i++,j++){
                    if((arr[i][j]=="x"&&arr[i][j+1]=="x"&&arr[i][j+2]=="x")
                    ||(arr[i][j]=="x"&&arr[i+1][j]=="x"&&arr[i+2][j]=="x")){
                       // console.log("computer win.");
                        win=0;
                        this.winMassage(win);
                        return false;

                    }
                    else{
                        this.playerMove(arr,move,count)
                    }
                        
                    }
            }
       // }
    },

        playerWin(arr,move,count){
            var win=0;
            //if(win=0){
                var j=0,i=0;
                if( count<=9){
                    for(i=0,j=0;i<3,j<3;i++,j++){
                        if((arr[i][j]=="0"&&arr[i][j+1]=="0"&&arr[i][j+2]=="0")
                        ||(arr[i][j]=="0"&&arr[i+1][j]=="0"&&arr[i+2][j]=="0")){
                            win++;
                            this.winMassage(win)
                            return false;
                            //console.log("You are winner");
                            //console.log("player  win.");
                        
                    }
                    else{
                            this.autoPlay(arr,move,count);
                    }
                            
                }
            }
        //}
    },
winMassage(win){
    if(win==1){
        console.log("You are winner");
        //break;
        
    }
    else{
        console.log("Computer win");
        //break;
        
    }
}


}
