var fs=require('fs');
var rl=require('readline-sync')
module.exports={
    readFile(path){
        var content=fs.readFileSync(path);
        return content;
    },
    writeFile(path,data){
        var content= fs.writeFileSync(path, JSON.stringify(data));
    },
    inputStringRead(){
        try{
            let value = rl.question("");
            console.log(value);
            if(value==undefined)    throw 'Cannot be undefined'
    
            return value;
        }
        catch(e)
        {
            return e;
        }
    },
    inputIntegerRead(){
        try{
        var value=rl.questionInt();
        if(value==undefined)    throw 'Cannot be undefined'
        return value;
        }
        catch(e){
            return e;
        }
    }

}