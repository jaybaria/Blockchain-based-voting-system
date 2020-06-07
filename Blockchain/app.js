const Blockchain= require('./blockchain');

const myChain=new Blockchain();
myChain.addBlock('i ma the second block');
myChain.addBlock('i am the third block');
myChain.printChain();