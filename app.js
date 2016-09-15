
var queueimplementation = new queue();

console.log(queueimplementation.size());

queueimplementation.enqueue(5);
console.log(queueimplementation.dequeue());
console.log(queueimplementation.dequeue());
queueimplementation.printqueue();
console.log(queueimplementation.size());
queueimplementation.enqueue(6);
queueimplementation.enqueue(7);
queueimplementation.enqueue(8);
queueimplementation.enqueue(9);
console.log(queueimplementation.size());
queueimplementation.printqueue();

for(var i = queueimplementation._oldRecodIndex ; i < queueimplementation._newRecodIndex ; i++){
        console.log(queueimplementation.currentData(i+1));
    }