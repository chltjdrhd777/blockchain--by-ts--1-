"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
        // I can make default class values like this but, I wan to add more convenient things which allows me to use some methods contained in the class although I did not make block(actually, if I want to use method default by class, I have to write the method inside class. For example, "class Block{ sayHello();} then, then, "const blockChain:Block = new Block();" ")  by using "crypto". First of all, write "npm add crypto-js" in terminal. Then, in the top of codes, add "(import * as CryptoJS from "crypto-js)";
    }
    ;
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "2020202020202", "", "hello", 123456);
let blockchain = [genesisBlock]; // makes the array which consists of block object.
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlcok = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlcok;
};
//console.log(createNewBlock("hello"), createNewBlock("bye bye"));
console.log(blockchain.length - 1);
//# sourceMappingURL=index.js.map