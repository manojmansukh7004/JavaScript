var ll=require('.../DataStructure/Utility/LinkedList');
var util=require('./utility/utility')
var rl=require('readline-sync');
var fs=require('fs');

var list =new ll
class Stock{
    constructor(){
        var content=util.readFile('./jsonFile/CompanyStock.json');
        this.data=JSON.parse(content);
        console.log(this.data);
        
    }
}
class StockLinkList extends Stock{
    
}
