var util= require('./Utility/Utility');
var rl = require('readline-sync');

var node=rl.questionInt("Enter the no nodes:");
var tree=util.binaryTree(node);
console.log(tree +" trees are generated.");
 