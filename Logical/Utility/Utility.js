
var readlineSync = require('readline-sync');
module.exports={    

        stringReplace(name){
                var str= "hello username How are you?";
                str=str.replace("username",name);
                
                console.log(str);
                
        },

        flipCoin(toss){
                var head=0,tail=0;
                for(var i=0;i<toss;i++){
                       var random=Math.random();
                       //console.log(random);
                        if(random<0.5){
                                tail++;
                        }
                        else{
                                head++;
                        }
                }
                console.log("Head:"+head);
                console.log("Tail:"+tail);
                console.log("per of head count:"+(head*100/toss));
                console.log("per of tail count:"+(tail*100/toss));
        },

        isLeapYear(year){
                if(year%4==0 || (year%100!=0 && year%400==0)){
                        console.log("year is leap year");       
                }
                else{
                        console.log("year not leap year");
                }
        },

        powerOf2(n){
                var powerOf2=1;
                for(var i=0;i<n;i++){
                        console.log(i+" "+powerOf2);
                        powerOf2=powerOf2*2;
                }
        },

        harmonic(n){
                var result=0;
                for(var i=1;i<n;i++){
                        var result=result+1/i;
                }
                return result;
        },

        primeFactor(n){
                for(var i=2;i<n;i++){
                        while(n%i==0){
                                console.log(i +" ");
                                n=n/i;
                        }
                }
        },
        
        randomizeInput(){

                /**
                 * 
                 * variable autoInput takes in the value of 0 to 3 as Math.random can generate value between 0 to 1
                 * 
                 */
                        var autoInput= 3*Math.random();  
                
                        var tic;
                /**
                 * 
                 * checking and categorizing the values to set tic a value
                 * 
                 * can use function Math.floor to eleminate decimals
                 * 
                 */
                        if(autoInput<1){
                
                            tic=0;
                
                        }
                
                        else if(autoInput>=1&&autoInput<2){
                
                            tic=1;
                
                        }
                
                        else if(autoInput>=2&&autoInput<3){
                
                            tic=2;
                
                        }
                /**
                 * return value of tic to function call
                 */
                        return tic;
                    }
                ,
                
                    autoPlay(ticTacArray, knock, count){
                        console.log("autoPlay Turn");
                        var ticRow=this.randomizeInput();
                        var ticColumn=this.randomizeInput();
                        if(ticTacArray[ticRow][ticColumn]=="*" && count<10){
                            ticTacArray[ticRow][ticColumn]="X";
                            
                            this.printTicTac(ticTacArray);
          this.findAutoWinner(ticTacArray,knock,count);
                            //this.findHumanWinner(ticTacArray);
                            //this.playTicTac(ticTacArray, knock, count);
                            count++;
                            knock=0;
                        }
                        else{
                            console.log("Coulumn occupied");
                            this.autoPlay(ticTacArray, knock, count);
                        }
                        
                    }
                ,
                    playTicTac(ticTacArray, knock, count){
                        var ticRow = readlineSync.question('Input the value of Row '); 
                        var ticColumn = readlineSync.question('Input the value of Column '); 
                        if(ticTacArray[ticRow-1][ticColumn-1]=="*" && count<10){
                            ticTacArray[ticRow-1][ticColumn-1]="O";
                            
                            this.printTicTac(ticTacArray);
                            //this.findAutoWinner(ticTacArray);
this.findHumanWinner(ticTacArray,knock,count);
                            //this.autoPlay(ticTacArray, knock, count);
                            count++;
                            knock=0;
                        }
                        else if(ticRow>3 || ticRow<1 || ticColumn<1 || ticColumn > 3 ){
                            console.log("Invalid Entry");
                            this.playTicTac(ticTacArray, knock, count);
                        }
                        else{
                            console.log("Coulumn occupied");
                            this.playTicTac(ticTacArray, knock, count);
                        }
                
                    }
                ,
                
                    printTicTac(ticTacArray){
                        var arrText='';
                        for (var i = 0; i < ticTacArray.length; i++) {
                            for (var j = 0; j < ticTacArray[i].length; j++) {
                                arrText+=ticTacArray[i][j]+' ';
                            }
                            console.log(arrText);
                            arrText='';
                        }
                    }
                ,
                    findHumanWinner(ticTacArray,knock,count){
                        var j=0,i=0;
                        if( count<=9){
                            for(i=0,j=0;i<3,j<3;i++,j++){
                                if((ticTacArray[i][j]=="O"&&ticTacArray[i][j+2]=="O"&&ticTacArray[i][j+2]=="O")
                                ||(ticTacArray[i][j]=="O"&&ticTacArray[i][j+2]=="O"&&ticTacArray[i][j+2]=="O")){
                                    console.log("You are winner");
                                    this.winMessage();
                                    return false;
                                
                                }
                                else {
                                    this.findHumanWinner2(ticTacArray,knock,count);
                                }
                            }
                        }
                
                        else {
                            console.log("its a draw")
                            return false;
                        }
                    }
                ,
                    findHumanWinner2(ticTacArray,knock,count){        
                        i=0,j=0;
                        if(count<=9){
                            if(ticTacArray[i][j]=="O"&&ticTacArray[i+1][j+1]=="O"&&ticTacArray[i+2][j+2]=="O"){
                                console.log("You are winner");
                                this.winMessage();
                                return false;
                            
                            }
                            if(ticTacArray[i+2][j]=="O"&&ticTacArray[i+1][j+1]=="O"&&ticTacArray[i][j+2]=="O"){
                                console.log("You are winner");
                                this.winMessage();
                                return false;
                            
                            
                            }
                            else
                                this.autoPlay(ticTacArray,knock,count);
                        }
                        else{
                            console.log("its a draw");
                            return false;
                        }
                    }
                ,
                    findAutoWinner(ticTacArray,knock,count){
                        var j=0,i=0;
                        if(count<=9){
                            for(i=0,j=0;i<3,j<3;i++,j++){
                                if((ticTacArray[i][j]=="X"&&ticTacArray[i][j+2]=="X"&&ticTacArray[i][j+2]=="X")
                                ||(ticTacArray[i][j]=="X"&&ticTacArray[i][j+2]=="X"&&ticTacArray[i][j+2]=="X")){
                                    console.log("Winner is Computer");
                                    this.loseMessage();
                                }
                                else {
                                        this.findAutoWinner2(ticTacArray,knock,count);
                                }
                            }
                        }
                        else {
                            console.log("its a draw");
                            return false;
                        }
                    }
                ,
                    findAutoWinner2(ticTacArray,knock,count){    
                        i=0,j=0;
                        if(count<=9){
                            if(ticTacArray[i][j]=="X"&&ticTacArray[i+1][j+1]=="X"&&ticTacArray[i+2][j+2]=="X"){
                                console.log("Winner is Computer");
                                this.loseMessage();
                            }
                            if(ticTacArray[i+2][j]=="X"&&ticTacArray[i+1][j+1]=="X"&&ticTacArray[i][j+2]=="X"){
                                console.log("Winner is Computer");
                                this.loseMessage();
                            }
                            else 
                                this.playTicTac(ticTacArray,knock,count);
                        }
                        else {
                            console.log(" its a draw");
                            return false;
                        }
                    }
                ,
                    winMessage(){
                        console.log("Congratulations");
                        return false;
                    }
                ,
                    loseMessage(){
                        console.log("Loser, Try again");
                        return false;
                    }
                ,  

            }



