function stack(){
    this._size = 0;
    this._storage = {};
}

stack.prototype.push = function(data){
    var size = this._size ++;
    this._storage[size] = data;
}

stack.prototype.pop = function(){
    var size = this._size,  deletedData ;
    
    if(size){
        deletedData= this._storage[size];
        delete this._storage[size];
        size = this._size--;
        return deletedData;
    }
};