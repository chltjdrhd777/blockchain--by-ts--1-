import * as CryptoJS from "crypto-js";

class Block {
    public index:number;
    public hash: string;
    public previousHash: string;
    public data : string;
    public timestamp:number;

    static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string):string =>CryptoJS.SHA256(index + previousHash + timestamp+ data).toString();

    constructor(
        index:number,
        hash: string,
        previousHash: string,
        data : string,
        timestamp:number,
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp; 
        // I can make default class values like this but, I wan to add more convenient things which allows me to use some methods contained in the class although I did not make block(actually, if I want to use method default by class, I have to write the method inside class. For example, "class Block{ sayHello();} then, then, "const blockChain:Block = new Block();" ")  by using "crypto". First of all, write "npm add crypto-js" in terminal. Then, in the top of codes, add "(import * as CryptoJS from "crypto-js)";
    };
}   

const genesisBlock:Block = new Block(0,"2020202020202","","hello", 123456);

let blockchain:Block[]  = [genesisBlock]; // makes the array which consists of block object.

const getBlockchain = ():Block[] =>blockchain;
const getLatestBlock = ():Block => blockchain[blockchain.length -1]
const getNewTimeStamp = ():number =>Math.round(new Date().getTime()/1000);

const createNewBlock = (data:string):Block =>{
    const previousBlock: Block =getLatestBlock();
    const newIndex: number = previousBlock.index+1;
    const newTimestamp:number = getNewTimeStamp();
    const newHash : string = Block.calculateBlockHash(newIndex, previousBlock.hash,newTimestamp,data);
    const newBlcok: Block = new Block(newIndex, newHash, previousBlock.hash,data,newTimestamp);
    return newBlcok;
};

//console.log(createNewBlock("hello"), createNewBlock("bye bye"));
console.log(blockchain.length -1);
export {};