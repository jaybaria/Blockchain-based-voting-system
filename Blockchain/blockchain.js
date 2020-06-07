/*const Block = require('./block');

class Blockchian{
    constructor(){
        this.chain=[new Block(0, new Date().toUTCString(),'I am Genosis Block','0')];
    }

    getPreviousHash(){
       return this.chain[this.chain.length-1].hash;
    }

    addBlock(data)
    {
        const timestamp = new Date().toUTCString();
        const index=this.chain.length;
        const PreviousHash = this.getPreviousHash();
        const newBlock = new Block(index,  timestamp , data , PreviousHash);
        if(this.isValid(newBlock))
        {
            this.chain.push(newBlock);
        }
        else{
            console.log('Invalid block');
        }
    }

    isValid(newBlock){
        const currentBlock = this.chain[this.chain.length -1];
        if(currentBlock.index + 1 !== newBlock.index){
            return false;
        }
        else if(newBlock.PreviousHash !== currentBlock.hash){
            return false;
        }
        else if(newBlock.hash !== newBlock.calculateHash()){
            return false;
        }
        return true;
    }

    printChain(){
        console.log(this.chain);
    }
}

module.exports=Blockchian;*/

const Block = require('./block');

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        const genesisDate = '04/07/1998';
        return new Block('Genesis Block', 0, genesisDate);
    }

    getLastBlock(){
        return this.chain[this.chain.length-1];
    }

    addNewBlock(newBlock){
        newBlock.index=this.getLastBlock().index + 1;
        newBlock.hash=newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let blocksToAdd =5;

const PolyChain = new Blockchain();

for(i=0;i<blocksToAdd;i++){
    PolyChain.addNewBlock(new Block({sender:'Polycode', reciver:'Youtube', message: 'Block ${PolyChain.chian.length}has been added to the chain'}));
}

PolyChain.chain.forEach((block)=>{
    Console.log(block);
});
