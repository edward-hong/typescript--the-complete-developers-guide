"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([50, 3, -5, 0])
// numbersCollection.sort()
// console.log(numbersCollection.data)
// const charactersCollection = new CharactersCollection('Xaayb')
// charactersCollection.sort()
// console.log(charactersCollection.data)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
