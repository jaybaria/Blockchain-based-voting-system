/*const crypto=require('crypto');

class Block{
    constructor(index,timestamp, data , previousHash){
    this.index=index;
    this.timestamp=timestamp;
    this.data=data; 
    this.previousHash=previousHash;
    this.hash=this.calculateHash();
    }

    calculateHash(){
        const stringToHash =this.index + this.previousHash + this.timestamp + JSON.stringify(this.data);
        return crypto.createHash('sha256').update(stringToHash).digest('hex');
    }    
}
module.exports=Block;*/
const { SHA256 }=require('crypto-js');

class Block
{
    constructor(data,index,timestamp=Stirng(new Date()))
    {
    this.index=index;
    this.timestamp=timestamp;
    this.data=data; 
    
    this.hash=this.calculateHash();
    }

    calculateHash(){
        return SHA256(JSON.stringify (this.data) + this.index + this.timestamp ).toString();
    }
}