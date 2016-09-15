function queue(){
   this._oldRecodIndex = 0;
   this._newRecodIndex = 0;
   this._storage = {};
}

queue.prototype.size = function(){
    return this._newRecodIndex - this._oldRecodIndex;
}

queue.prototype.enqueue = function(data){
    var newIndex = this._newRecodIndex;

    this._storage[newIndex] = data;
    this._newRecodIndex++;
}

queue.prototype.dequeue = function(){
    var oldIndex = this._oldRecodIndex,
        deletedData ;
    if(this._newRecodIndex > this._oldRecodIndex ){
        deletedData = this._storage[oldIndex];
        delete this._storage[oldIndex];
        this._oldRecodIndex++;
        return deletedData;
    }
    else{
        return "No records to dequeue" ; 
        //console.log("no records to dequeue");
    }

}

queue.prototype.currentData = function(index){
    if(this._newRecodIndex > index && this._oldRecodIndex <= index && this._newRecodIndex > this._oldRecodIndex){
        return this._storage[index];
    }
    else{
        return "No record set found for the given Index";
    }
}

queue.prototype.printqueue = function(){
   if(this._newRecodIndex > this._oldRecodIndex ){
    for(var i = this._oldRecodIndex ; i < this._newRecodIndex ; i++){
        console.log(this._storage[i]);
    }
   }
   else{
       console.log("Queue is Empty");
   }
}